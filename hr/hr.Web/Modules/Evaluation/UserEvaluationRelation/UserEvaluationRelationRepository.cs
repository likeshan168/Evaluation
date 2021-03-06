﻿

namespace hr.Evaluation.Repositories
{
    using Hangfire;
    using hr.Administration.Repositories;
    using hr.Evaluation.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Text;
    using System.Web;
    using MyRow = Entities.UserEvaluationRelationRow;

    public class UserEvaluationRelationRepository
    {
        public HttpRequestBase WebRequest { get; set; }
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //先判断是否已经存在
            var relations = List(uow.Connection, new ListRequest
            {
                EqualityFilter = new Dictionary<string, object>
                {
                    { MyRow.Fields.UserId.Name, request.Entity.UserId },
                    { MyRow.Fields.ExamId.Name, request.Entity.ExamId }
                }
            }).Entities;
            if (relations != null && relations.Count != 0)
            {
                throw new Exception("已经存在改用户对应考核的关系配置，请点击修改");
            }

            var res = new MySaveHandler().Process(uow, request, SaveRequestType.Create);
            AddTodoListAndEvaluationResultDetail(uow, request, GetEvaluationUserIdsByUserIdAndExamId(uow, request));

            return res;
        }
        /// <summary>
        /// 专为批量导入用的
        /// </summary>
        /// <param name="uow"></param>
        /// <param name="request"></param>
        /// <returns></returns>
        public SaveResponse BatchCreate(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var res = new MySaveHandler().Process(uow, request, SaveRequestType.Create);
            //AddTodoListAndEvaluationResultDetail(uow, request, GetEvaluationUserIdsByUserIdAndExamId(uow, request));
            return res;
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            // 检查是否只是修改考核人员关系，而没有修改考核试题
            /*
             * 1. 如果考试试题有更改，那么就应该添加考试结果的内容
             * 2. 如果只是考核人添加或者被减少，那么只添加或减少考试结果的内容
             * 
             */
            if (!uow.Connection.Exists<MyRow>(MyRow.Fields.Id == request.Entity.Id.Value && MyRow.Fields.ExamId == request.Entity.ExamId.Value))
            {
                //添加考核结果详情，这里是将考卷更改了
                AddTodoListAndEvaluationResultDetail(uow, request, GetEvaluationUserIdsByUserIdAndExamId(uow, request), false);
            }
            else
            {
                //只是添加或者减少考核人 如果是添加的话，那就增加考试结果内容，如果是减少的话，那就删除考试结果的内容
                var userList = request.Entity.UserList;

                var oldUserList = GetEvaluationUserIdsByUserIdAndExamId(uow, request);

                var toDeleteList = oldUserList.Except(userList);

                DeleteEvaluationResultDetail(uow, request, toDeleteList);

                var toAddList = userList.Except(oldUserList);
                AddTodoListAndEvaluationResultDetail(uow, request, toAddList, true);
                //在添加考核人以后应该要对其进行发送邮件告知，对被考核人进行评价
                //TODO; add the email feature in the future if needed
            }

            var res = new MySaveHandler().Process(uow, request, SaveRequestType.Update);
            return res;
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            // first update the isenabled to false

            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }

        public void AddTodoListAndEvaluationResultDetail(IUnitOfWork uow, SaveRequest<MyRow> request, IEnumerable<int> evaluationUserIds, bool isUpdate = false)
        {
            // get the exam info
            #region get the exam info
            var exam = new ExamRepository().Retrieve(uow.Connection, new RetrieveRequest()
            {
                EntityId = request.Entity.ExamId
            });
            #endregion

            #region add todo list info
            //TODO: add the feature in the future
            //add self evaluation to todo list
            //if (!isUpdate)
            //{
            //    var todoRep = new ToDoListRepository();
            //    var todoResponse = todoRep.Create(uow, new SaveRequest<ToDoListRow>()
            //    {
            //        Entity = new ToDoListRow()
            //        {
            //            UserId = request.Entity.UserId,
            //            Title = Constants.Evaluation.Title,
            //            Content = Constants.Evaluation.Content,
            //            StartDate = DateTime.Now,
            //            EndDate = exam.Entity.EndDate,
            //            CreateBy = Int32.Parse(Authorization.UserId),
            //            Url = $"Evaluation/Evaluation/SelfEvaluation?i={exam.Entity.Id}",
            //            ExamId = exam.Entity.Id,
            //            IsEnabled = true
            //        }
            //    });
            //}

            #endregion

            //获取评价人信息
            #region add evaluation result detail info

            EvaluationResultDetailRepository erdRep = new EvaluationResultDetailRepository(); ;
            EvaluationItemRepository itemRep = new EvaluationItemRepository();
            foreach (var evaluationUserId in evaluationUserIds)
            {
                //如果是更新的话，需要将被评价人的自我评价也更新过来

                if (isUpdate)
                {
                    var rst = erdRep.List(uow.Connection, new ListRequest
                    {
                        EqualityFilter = new Dictionary<string, object>
                        {
                            { EvaluationResultDetailRow.Fields.ExamId.Name,exam.Entity.Id },
                            { EvaluationResultDetailRow.Fields.UserId.Name,request.Entity.UserId }
                        }
                    });
                    rst.Entities.DistinctBy(p => new { p.EvaluationItemId }).ToList().ForEach(p =>
                       {
                           erdRep.Create(uow, new SaveRequest<EvaluationResultDetailRow>()
                           {
                               Entity = new EvaluationResultDetailRow()
                               {
                                   ExamId = exam.Entity.Id,
                                   UserId = request.Entity.UserId,
                                   EvaluationItemId = p.EvaluationItemId,
                                   EvaluationUserId = evaluationUserId,
                                   InputContent = p.InputContent
                               }
                           });
                       });
                }
                else
                {
                    var itemIds = exam.Entity.EvaluationIds.Split(',');
                    foreach (var id in itemIds)
                    {
                        erdRep.Create(uow, new SaveRequest<EvaluationResultDetailRow>()
                        {
                            Entity = new EvaluationResultDetailRow()
                            {
                                ExamId = exam.Entity.Id,
                                UserId = request.Entity.UserId,
                                EvaluationItemId = int.Parse(id),
                                EvaluationUserId = evaluationUserId
                            }
                        });
                    }
                }
            }
            #endregion

            #region 发送邮件进行通知
            //只有在新增的时候，通知员工进行自我评价(记住：是在考核开始的当天发送，而不是马上发送邮件)
            //if (!isUpdate)
            //{
            //    SendEmail(uow, request, exam.Entity.Id);
            //}
            //现在都不自动发送邮件了，改为手动发送邮件

            #endregion
        }

        public IEnumerable<int> GetEvaluationUserIdsByUserIdAndExamId(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var equalityFilter = new Dictionary<string, object>();
            equalityFilter.Add(UserToUserViewRow.Fields.UserId.Name, request.Entity.UserId);
            equalityFilter.Add(UserToUserViewRow.Fields.ExamId.Name, request.Entity.ExamId);
            var evaluationUsers = new UserToUserViewRepository().List(uow.Connection, new ListRequest()
            {
                EqualityFilter = equalityFilter
            }).Entities.Select(p => p.EvaluationUserId.Value);
            return evaluationUsers;
        }

        private void DeleteEvaluationResultDetail(IUnitOfWork uow, SaveRequest<MyRow> request, IEnumerable<int> toDeleteList)
        {
            StringBuilder sb = new StringBuilder();
            foreach (var delete in toDeleteList)
            {
                sb.Append($"delete from hr.EvaluationResultDetail where ExamId={request.Entity.ExamId} and UserId={request.Entity.UserId} and EvaluationUserId={delete};");
            }
            if (sb.Length > 0)
            {
                uow.Connection.Execute(sb.ToString());
            }
        }

        private void SendEmail(IUnitOfWork uow, SaveRequest<MyRow> request, int? examId)
        {
            var equalityFilter = new Dictionary<string, object>();
            equalityFilter.Add(ExamRow.Fields.Id.Name, examId);
            equalityFilter.Add(ExamRow.Fields.IsEnabled.Name, 1);
            var todo = new ExamRepository().List(uow.Connection, new ListRequest
            {
                EqualityFilter = equalityFilter
            }).Entities.FirstOrDefault();
            var user = new UserRepository().Retrieve(uow.Connection, new RetrieveRequest
            {
                EntityId = request.Entity.UserId
            }).Entity;
            if (todo != null && user != null)
            {
                //计算现在离考核开始还有多少天
                if (todo.StartDate.HasValue)
                {
                    DateTime now = DateTime.Now;
                    int days = now.GetDiffDays(todo.StartDate.Value);
                    if (todo.StartDate.Value > now)
                    {
                        BackgroundJob.Schedule(
                        () => EmailMangement.Send(todo.Title, user.Username, user.Email, "http://" + WebRequest.Url.Host + ':' + WebRequest.Url.Port),
                        TimeSpan.FromDays(days));
                    }
                    else
                    {
                        //立即发送
                        BackgroundJob.Enqueue(() => EmailMangement.Send(todo.Title, user.Username, user.Email, "http://" + WebRequest.Url.Host + ':' + WebRequest.Url.Port));
                    }
                }
                //BackgroundJob.Enqueue(() => EmailMangement.Send(todo.Title, user.Username, user.Email, WebRequest.Url.Host + ':' + WebRequest.Url.Port + '/' + $"Evaluation/Evaluation/SelfEvaluation?i={examId}"));
            }
        }
    }
}