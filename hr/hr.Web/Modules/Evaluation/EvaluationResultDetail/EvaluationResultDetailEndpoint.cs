
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
            foreach (var item in request.Entities)
            {
                if (item.EvaluationUserId.HasValue)
                {
                    evaluationUserId = item.EvaluationUserId.Value;
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

            return new SaveResponse();
        }
    }
}
