
namespace hr.Evaluation.Endpoints
{
    using hr.Evaluation.Entities;
    using hr.Evaluation.Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Text;
    using System.Web.Mvc;
    using MyRepository = Repositories.ExamRepository;
    using MyRow = Entities.ExamRow;

    [RoutePrefix("Services/Evaluation/Exam"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ExamController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //同事更新任务结束时间
            var res = new MyRepository().Update(uow, request);
            uow.Connection.Execute($"update hr.ToDoList set EndDate='{request.Entity.EndDate.Value.ToString("yyyy-MM-dd")}' where IsEnabled =1 and IsComplete = 0 and ExamId = {request.Entity.Id.Value}");
            return res;
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            //删除考核之前，需要删除考核关系和考核结果
            //new UserEvaluationRelationRepository().Delete(uow, new DeleteRequest { });
            var relations = new UserEvaluationRelationRepository().List(uow.Connection, new ListRequest
            {
                EqualityFilter = new System.Collections.Generic.Dictionary<string, object>
                {
                    { UserEvaluationRelationRow.Fields.ExamId.Name,request.EntityId}
                }
            }).Entities;
            StringBuilder sb = new StringBuilder();
            int examId = int.Parse(request.EntityId.ToString());
            if (relations != null)
            {
                foreach (var item in relations)
                {
                    sb.Append($"delete from [hr].[UserEvaluationToUser] where UserEvaluationRelationId={item.Id};");
                }
                sb.Append($"delete from [hr].[UserEvaluationRelation] where ExamId={examId}");
                sb.Append($"delete from [hr].[EvaluationResultDetail] where ExamId={examId}");
                if (sb.Length != 0)
                {
                    uow.Connection.Execute(sb.ToString());
                }
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
