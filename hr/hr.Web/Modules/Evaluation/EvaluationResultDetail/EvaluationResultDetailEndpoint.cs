
namespace hr.Evaluation.Endpoints
{
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
            foreach (var item in request.Entities)
            {
                if (item.EvaluationUserId.HasValue)
                {
                    evaluationUserId = item.EvaluationUserId.Value;
                    //只有是自我评价的时候，才会上传EvaluationUserId这个参数
                    isSelfEvaluation = true;
                    examId = item.ExamId.Value;
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
                equalityFilter.Add(Entities.UserToUserViewRow.Fields.UserId.Name, Authorization.UserId);
                equalityFilter.Add(Entities.UserToUserViewRow.Fields.ExamId.Name, examId);
                var evaluationUsers = new Repositories.UserToUserViewRepository().List(uow.Connection, new ListRequest
                {
                    EqualityFilter = equalityFilter
                });

                //查询条件为UserId= and ExamId = and IsComplete=0 and IsEnabled=1
                equalityFilter = new System.Collections.Generic.Dictionary<string, object>();
                equalityFilter.Add(Entities.TodoListViewRow.Fields.UserId.Name, Authorization.UserId);
                equalityFilter.Add(Entities.TodoListViewRow.Fields.ExamId.Name, examId);
                equalityFilter.Add(Entities.TodoListViewRow.Fields.IsComplete.Name, 0);
                equalityFilter.Add(Entities.TodoListViewRow.Fields.IsEnabled.Name, 1);
                var todo = new Repositories.TodoListViewRepository().List(uow.Connection, new ListRequest
                {
                    EqualityFilter = equalityFilter
                }).Entities.FirstOrDefault();

                foreach (var item in evaluationUsers.Entities)
                {
                    todo.Email = item.Email;
                    todo.Url = HttpContext.Request.Url.Host + '/' + todo.Url;
                    todo.Username = item.Username;
                    Hangfire.BackgroundJob.Enqueue(() => EmailMangement.Send(todo));
                }
            }


            return new SaveResponse();
        }
    }
}
