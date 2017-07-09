
namespace hr.Evaluation.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.EvaluationResultRepository;
    using MyRow = Entities.EvaluationResultRow;

    [RoutePrefix("Services/Evaluation/EvaluationResult"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class EvaluationResultController : ServiceEndpoint
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
            //check if it exists
            var rep = new MyRepository();
            foreach (var item in request.Entities)
            {
                var result = uow.Connection.Query<MyRow>($"select * from hr.EvaluationResult where UserId={item.UserId} and ExamId={item.ExamId}").FirstOrDefault();
                if (result == null)
                {
                    rep.Create(uow, new SaveRequest<MyRow>
                    {
                        Entity = item
                    });
                }
                else
                {
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
