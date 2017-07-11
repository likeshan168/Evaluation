
namespace hr.Evaluation.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.ToDoListRepository;
    using MyRow = Entities.ToDoListRow;

    [RoutePrefix("Services/Evaluation/ToDoList"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ToDoListController : ServiceEndpoint
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

            //var equalityFilter = new Dictionary<string, object>();
            //equalityFilter.Add(MyRow.Fields.IsEnabled.Name, true);
            //request.EqualityFilter = equalityFilter;
            return new MyRepository().List(connection, request);
        }

        public int GetCurrentUserId()
        {
            return int.Parse(((UserDefinition)Authorization.UserDefinition).Id);
        }
    }
}
