
namespace hr.Evaluation.Endpoints
{
    using hr.Evaluation.Entities;
    using hr.Evaluation.Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.EvaluationFinalResultRepository;
    using MyRow = Entities.EvaluationFinalResultRow;

    [RoutePrefix("Services/Evaluation/EvaluationFinalResult"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class EvaluationFinalResultController : ServiceEndpoint
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

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new Serenity.Reporting.DynamicDataReport(data, request.IncludeColumns, typeof(Columns.EvaluationFinalResultColumns));
            var bytes = new ReportRepository().Render(report);
            return Serenity.Web.ExcelContentResult.Create(bytes, "EvaluationFinalResult_" +
                System.DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        public FileContentResult ListDetailExcel(IDbConnection connection, ListRequest request)
        {
            var data = new EvaluationResultViewRepository().List(connection, request).Entities;
            var flds = EvaluationResultViewRow.Fields;
            var includeColums = new List<string> { flds.Username.Name, flds.Title.Name, flds.EvaluationEmail.Name, flds.TotalScore.Name, flds.EvaluationUser.Name };
            var report = new Serenity.Reporting.DynamicDataReport(data, includeColums, typeof(Columns.EvaluationResultViewColumns));
            var bytes = new ReportRepository().Render(report);
            return Serenity.Web.ExcelContentResult.Create(bytes, "EvaluationFinalResultDetail_" +
                System.DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
        
        public FileContentResult ListSelfEvaluationExcel(IDbConnection connection, ListRequest request)
        {
            var sql =
                "select distinct i.Content,InputContent, Username from [hr].[EvaluationResultDetail] e left join dbo.Users u " +
                "on e.UserId=u.UserId left join hr.EvaluationItem i on " +
                "i.Id = e.EvaluationItemId where inputcontent is not null and i.IsSelfEvaluation = 1 order by UserName";
            var data = connection.Query<SelfEvaluationModel>(sql);
            var includeColums = new List<string> {"Username", "Content", "InputContent" };
            var report = new Serenity.Reporting.DynamicDataReport(data, includeColums, typeof(SelfEvaluationModel));
            var bytes = new ReportRepository().Render(report);
            return Serenity.Web.ExcelContentResult.Create(bytes, "自我评价_" +
                                                                 System.DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
