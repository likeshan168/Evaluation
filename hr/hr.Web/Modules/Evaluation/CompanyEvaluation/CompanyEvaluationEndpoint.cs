
using System.Collections.Generic;
using System.Text;
using hr.Modules.Evaluation.CompanyEvaluation;

namespace hr.Evaluation.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.CompanyEvaluationRepository;
    using MyRow = Entities.CompanyEvaluationRow;

    [RoutePrefix("Services/Evaluation/CompanyEvaluation"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CompanyEvaluationController : ServiceEndpoint
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
            var user = (UserDefinition)Authorization.UserDefinition;
            if (user.Username != "admin" && !Authorization.HasPermission("Administration:Security") && !user.DepartmentId.HasValue)
            {
                throw new ValidationError("您无权查看，未找到您所属的部门信息");
            }
            return new MyRepository().List(connection, request);
        }

        [AllowAnonymous]
        public IEnumerable<MyRow> GetEvaluation(CompanyEvaluationRequest request)
        {
            using (var conn = SqlConnections.NewByKey("Default"))
            {

                string sql = $"SELECT * FROM hr.CompanyEvaluation where UserId={request.UserId} and ExamId={request.ExamId};";
                return conn.Query<MyRow>(sql);
            }
        }

        [AllowAnonymous]
        public ServiceResponse AddCompanyEvaluation(CompanyEvaluationRequest request)
        {
            using (var conn = SqlConnections.NewByKey("Default"))
            {
                string sql = $"insert into hr.CompanyEvaluation(UserId, ExamId, EvaluationContent) values({request.UserId}, {request.ExamId}, '{request.Content}');";
                conn.Execute(sql);
                return new ServiceResponse();
            }
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new Serenity.Reporting.DynamicDataReport(data, request.IncludeColumns, typeof(Columns.CompanyEvaluationColumns));
            var bytes = new ReportRepository().Render(report);
            return Serenity.Web.ExcelContentResult.Create(bytes, "CompanyEvaluation_" +
                                                                 System.DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
