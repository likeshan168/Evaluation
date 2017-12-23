
namespace hr.Evaluation.Endpoints
{
    using OfficeOpenXml;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.IO;
    using System.Web.Mvc;
    using MyRow = Entities.UserEvaluationRelationRow;
    using System.Linq;
    using hr.Evaluation;
    using hr;
    using hr.Evaluation.Repositories;
    using hr.Evaluation.Entities;
    using hr.Administration.Repositories;
    using hr.Administration.Entities;

    [RoutePrefix("Services/Evaluation/UserEvaluationRelationExcelImport"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize]
    public class UserEvaluationRelationExcelImportController : ServiceEndpoint
    {
        UserRepository userRepository = new UserRepository();
        UserEvaluationToUserRepository userEvaluationToUser = new UserEvaluationToUserRepository();
        LeaderShipRepository leaderShipRepository = new LeaderShipRepository();
        UserEvaluationRelationRepository userEvaluationRelationRepository = new UserEvaluationRelationRepository();
        [HttpPost]
        public ExcelImportResponse ExcelImport(IUnitOfWork uow, MyExcelImportRequest request)
        {
            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");
            //check the examId
            if (request.ExamId == 0)
            {
                throw new Exception("请选择考核");
            }
            ExcelPackage ep = new ExcelPackage();
            DateTime now = DateTime.Now;
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
            {
                ep.Load(fs);
            }

            var p = MyRow.Fields;


            var response = new ExcelImportResponse {ErrorList = new List<string>()};


            var worksheet = ep.Workbook.Worksheets[1];

            int colCount = worksheet.Dimension.End.Column;
            for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    // check the productno is empty or not
                    var userName = worksheet.Cells[row, 3].GetValue<string>().Trim();
                    if (userName.IsTrimmedEmpty())
                        continue;
                    //get the userid from the employee
                    var employee = userRepository.List(uow.Connection, new ListRequest
                    {
                        EqualityFilter = new Dictionary<string, object>
                        {
                            { UserRow.Fields.Username.Name, userName }
                        }
                    }).Entities.FirstOrDefault();
                    if (employee == null)
                    {
                        continue;
                    }
                    var relation = uow.Connection.TryFirst<MyRow>(q => q
                        .Select(p.Id, p.UserId, p.ExamId)
                        .Where(p.UserId == employee.UserId.Value && p.ExamId == request.ExamId));

                    //新增
                    if (relation == null)
                    {
                        relation = new MyRow
                        {
                            UserId = employee.UserId,
                            ExamId = request.ExamId
                        };
                        var req = new SaveRequest<MyRow>
                        {
                            Entity = relation
                        };
                        AddNewRecordIntoUserEvaluationRelation(uow, req, response);
                        UpdateUserEvaluationToUserTable(uow, worksheet, relation, employee, colCount, row);
                        //添加考核项目详情 这里是新增
                        userEvaluationRelationRepository.AddTodoListAndEvaluationResultDetail(uow, req, userEvaluationRelationRepository.GetEvaluationUserIdsByUserIdAndExamId(uow, req), false);
                    }
                    else
                    {
                        var req = new SaveRequest<MyRow>
                        {
                            Entity = relation
                        };
                        UpdateUserEvaluationToUserTable(uow, worksheet, relation, employee, colCount, row);
                        //添加考核项目详情 这里是新增
                        userEvaluationRelationRepository.AddTodoListAndEvaluationResultDetail(uow, req, userEvaluationRelationRepository.GetEvaluationUserIdsByUserIdAndExamId(uow, req), true);
                        response.Updated = response.Updated + 1;
                        continue;
                    }
                }
                catch (Exception ex)
                {
                    ex.Log();
                    response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
                }
            }

            return response;
        }

        private UserRow GetEmployeeByName(IUnitOfWork uow, string userName)
        {
            return userRepository.List(uow.Connection, new ListRequest
            {
                EqualityFilter = new Dictionary<string, object>
                        {
                            { UserRow.Fields.Username.Name, userName }
                        }
            }).Entities.FirstOrDefault();
        }

        private void AddNewRecordIntoUserEvaluationRelation(IUnitOfWork uow, SaveRequest<MyRow> request, ExcelImportResponse response)
        {
            userEvaluationRelationRepository.BatchCreate(uow, request);
            response.Inserted = response.Inserted + 1;
        }

        private void UpdateUserEvaluationToUserTable(IUnitOfWork uow, ExcelWorksheet worksheet, MyRow relation, UserRow evaluatedUser, int colCount, int row)
        {
            string tmpName = string.Empty;
            UserRow user;
            for (int i = 4; i <= colCount; i++)
            {


                tmpName = worksheet.Cells[row, i].GetValue<string>().Trim();
                //根据名称获取用户信息
                user = GetEmployeeByName(uow, tmpName);
                if (user == null)
                {
                    continue;
                }
                //更新领导关系表
                if (i == 4)
                {
                    UpdateLeaderShipTable(uow, evaluatedUser, user);
                }
                //然后根据UserEvaluationRelationId和UserId去获取考核关系详情信息
                var userETU = userEvaluationToUser.List(uow.Connection, new ListRequest
                {
                    EqualityFilter = new Dictionary<string, object>
                            {
                                { UserEvaluationToUserRow.Fields.UserEvaluationRelationId.Name , relation.Id },
                                { UserEvaluationToUserRow.Fields.UserId.Name , user.UserId }
                            }
                }).Entities.FirstOrDefault();
                //判断时候存在,存在就什么也不用做，不存在就新增考核关系
                if (userETU == null)
                {
                    userEvaluationToUser.Create(uow, new SaveRequest<UserEvaluationToUserRow>
                    {
                        Entity = new UserEvaluationToUserRow
                        {
                            UserEvaluationRelationId = relation.Id,
                            UserId = user.UserId
                        }
                    });

                }
                else
                {
                    continue;
                }
            }
        }

        private void UpdateLeaderShipTable(IUnitOfWork uow, UserRow evaluatedUser, UserRow parentUser)
        {
            var leaderShip = leaderShipRepository.List(uow.Connection, new ListRequest
            {
                EqualityFilter = new Dictionary<string, object>
                {
                    {LeaderShipRow.Fields.UserId.Name, evaluatedUser.UserId },
                    //{LeaderShipRow.Fields.ParentUserId.Name, parentUser.Id }
                }
            }).Entities.FirstOrDefault();
            //只存在更新的情况，因为这个领导关系表中的用户是在新增员工的时候自动新增，我们只需要维护其parentId
            if (leaderShip != null)
            {
                leaderShipRepository.Update(uow, new SaveRequest<LeaderShipRow>
                {
                    Entity = new LeaderShipRow
                    {
                        UserId = evaluatedUser.UserId,
                        ParentUserId = parentUser.UserId
                    },
                    EntityId = leaderShip.UserId
                });
            }
        }
    }
}
