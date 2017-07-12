﻿
namespace hr.Evaluation.Endpoints
{
    using hr.Evaluation.Entities;
    using hr.Evaluation.Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.EvaluationResultDetailRepository;
    using MyRow = Entities.EvaluationResultDetailRow;

    [RoutePrefix("Services/Evaluation/EvaluationResultDetail"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class EvaluationResultDetailController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Add(IUnitOfWork uow, AddEvaluationResultRequest<MyRow> request)
        {
            var rep = new MyRepository();
            int evaluationUserId;
            bool isSelfEvaluation = false;
            int examId = 0;
            int? userId = 0;
            foreach (var item in request.Entities)
            {
                if (examId == 0 || userId == 0)
                {
                    examId = item.ExamId.Value;
                    userId = item.UserId;
                }

                if (item.EvaluationUserId.HasValue)
                {
                    evaluationUserId = item.EvaluationUserId.Value;
                    //只有是自我评价的时候，才会上传EvaluationUserId这个参数
                    isSelfEvaluation = true;

                }
                else
                {
                    evaluationUserId = int.Parse(Authorization.UserId);
                }

                var result = uow.Connection.Query<MyRow>($"select * from hr.EvaluationResultDetail where EvaluationItemId={item.EvaluationItemId} and ExamId={item.ExamId} and UserId={item.UserId} and EvaluationUserId={evaluationUserId}").FirstOrDefault();
                if (result == null)
                {
                    rep.Create(uow, new SaveRequest<MyRow>
                    {
                        Entity = item
                    });
                }
                else
                {
                    //update
                    item.EvaluationUserId = evaluationUserId;
                    rep.Update(uow, new SaveRequest<MyRow>
                    {
                        EntityId = result.Id,
                        Entity = item
                    });
                }
            }
            //在完成自我评价之后，通知其他的评估人对本人进行评估
            if (isSelfEvaluation)
            {
                //发送邮件通知评估人进行评估
                var equalityFilter = new System.Collections.Generic.Dictionary<string, object>();
                equalityFilter.Add(UserToUserViewRow.Fields.UserId.Name, Authorization.UserId);
                equalityFilter.Add(UserToUserViewRow.Fields.ExamId.Name, examId);
                var evaluationUsers = new UserToUserViewRepository().List(uow.Connection, new ListRequest
                {
                    EqualityFilter = equalityFilter
                });

                //查询条件为UserId= and ExamId = and IsComplete=0 and IsEnabled=1
                equalityFilter = new System.Collections.Generic.Dictionary<string, object>();
                equalityFilter.Add(TodoListViewRow.Fields.UserId.Name, Authorization.UserId);
                equalityFilter.Add(TodoListViewRow.Fields.ExamId.Name, examId);
                equalityFilter.Add(TodoListViewRow.Fields.IsComplete.Name, 0);
                equalityFilter.Add(TodoListViewRow.Fields.IsEnabled.Name, 1);
                var todo = new TodoListViewRepository().List(uow.Connection, new ListRequest
                {
                    EqualityFilter = equalityFilter
                }).Entities.FirstOrDefault();

                foreach (var item in evaluationUsers.Entities)
                {
                    todo.Email = item.Email;
                    todo.Url = HttpContext.Request.Url.Host + ':' + HttpContext.Request.Url.Port + '/' + todo.Url;
                    Hangfire.BackgroundJob.Enqueue(() => EmailMangement.Send2(todo, item.Username));
                }
            }

            #region 邮件通知考核结果
            //在考核人对被考核人进行完考核之后，要标记一下，已经考核完毕，以便在以后邮件告知被考核人考核结果
            if (request.IsComplete)
            {
                /*
                 * 1. 获取考核关系
                 * 2. 标记对应考核人为已进行考核
                 * 3. 判断所有的考核人是否都已经进行过考核
                 */
                //var relation = new UserEvaluationRelationRepository().List(uow.Connection, new ListRequest
                //{
                //    EqualityFilter = new System.Collections.Generic.Dictionary<string, object>
                //    {
                //        { UserEvaluationRelationRow.Fields.UserId.Name, userId },
                //        { UserEvaluationRelationRow.Fields.ExamId.Name, examId }
                //    }
                //}).Entities.FirstOrDefault();
                var relation = uow.Connection.Query<UserEvaluationRelationRow>($"select * from hr.UserEvaluationRelation where UserId={userId} and ExamId={examId}").FirstOrDefault();

                if (relation != null)
                {
                    uow.Connection.Execute($"update hr.UserEvaluationToUser set HasEvaluated = 1 where UserId={int.Parse(Authorization.UserId)} and UserEvaluationRelationId={relation.Id};");
                    //var noEvaluations = new UserToUserViewRepository().List(uow.Connection, new ListRequest
                    //{
                    //    Criteria = new Criteria(UserToUserViewRow.Fields.UserId) == userId.Value && new Criteria(UserToUserViewRow.Fields.ExamId) == examId && new Criteria(UserToUserViewRow.Fields.HasEvaluated).IsNull()
                    //}).Entities;
                    var noEvaluations = uow.Connection.Query<UserToUserViewRow>($"select * from hr.UserToUserView where UserId={userId} and ExamId={examId} and HasEvaluated is null;");
                    if (noEvaluations == null || noEvaluations.Count() == 0)
                    {
                        //如果判断都已经进行了评价，那么就应该要发邮件告知被考核人考核结果
                        //var  evaluationResult = new EvaluationFinalResultRepository().List(uow.Connection, new ListRequest
                        // {
                        //    Criteria = new Criteria(EvaluationFinalResultRow.Fields.UserId) == userId.Value && new Criteria(EvaluationFinalResultRow.Fields.ExamId) == examId
                        //}).Entities.FirstOrDefault();
                        var evaluationResult = uow.Connection.Query<EvaluationFinalResultRow>($"select * from hr.EvaluationFinalResult where UserId={userId} and ExamId={examId};").FirstOrDefault();
                        if (evaluationResult != null)
                        {
                            Hangfire.BackgroundJob.Enqueue(() => EmailMangement.Send3(evaluationResult));
                        }
                    }
                }
            }
            #endregion

            return new SaveResponse();
        }
    }
}
