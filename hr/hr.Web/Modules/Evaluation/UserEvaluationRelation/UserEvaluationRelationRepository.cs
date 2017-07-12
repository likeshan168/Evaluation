

namespace hr.Evaluation.Repositories
{
    using Hangfire;
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
            var res = new MySaveHandler().Process(uow, request, SaveRequestType.Create);
            AddTodoListAndEvaluationResultDetail(uow, request, GetEvaluationUserIdsByUserIdAndExamId(uow, request));

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

        private void AddTodoListAndEvaluationResultDetail(IUnitOfWork uow, SaveRequest<MyRow> request, IEnumerable<int> evaluationUserIds, bool isUpdate = false)
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
            //只有在新增的时候，通知员工进行自我评价
            if (!isUpdate)
            {
                SendEmail(uow, request, exam.Entity.Id);
            }

            #endregion
        }

        private IEnumerable<int> GetEvaluationUserIdsByUserIdAndExamId(IUnitOfWork uow, SaveRequest<MyRow> request)
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
            equalityFilter.Add(TodoListViewRow.Fields.UserId.Name, request.Entity.UserId);
            equalityFilter.Add(TodoListViewRow.Fields.ExamId.Name, examId);
            equalityFilter.Add(TodoListViewRow.Fields.IsComplete.Name, 0);
            equalityFilter.Add(TodoListViewRow.Fields.IsEnabled.Name, 1);
            var todo = new TodoListViewRepository().List(uow.Connection, new ListRequest
            {
                EqualityFilter = equalityFilter
            }).Entities.FirstOrDefault();
            if (WebRequest != null && WebRequest.Url != null && !string.IsNullOrEmpty(WebRequest.Url.Host))
            {
                todo.Url = WebRequest.Url.Host + ':' + WebRequest.Url.Port + '/' + todo.Url;
            }
            BackgroundJob.Enqueue(() => EmailMangement.Send(todo));
        }
    }
}