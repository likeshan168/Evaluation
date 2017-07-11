
namespace hr.Evaluation.Endpoints
{
    using hr.Evaluation.Repositories;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.UserEvaluationRelationRepository;
    using MyRow = Entities.UserEvaluationRelationRow;

    [RoutePrefix("Services/Evaluation/UserEvaluationRelation"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class UserEvaluationRelationController : ServiceEndpoint
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
            // first update the isenabled to false
            //second delete the related evaluation result records
            var relation = Retrieve(uow.Connection, new RetrieveRequest { EntityId = request.EntityId }).Entity;
            if (relation != null)
            {
                string sql = $"UPDATE hr.ToDoList SET IsEnabled=0 WHERE UserId={relation.UserId} AND ExamId = {relation.ExamId};delete from hr.EvaluationResultDetail where UserId={relation.UserId} and ExamId={relation.ExamId}";
                uow.Connection.Execute(sql);
            }

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
    }
}
