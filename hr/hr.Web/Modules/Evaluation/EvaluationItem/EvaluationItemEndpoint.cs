
namespace hr.Evaluation.Endpoints
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.EvaluationItemRepository;
    using MyRow = Entities.EvaluationItemRow;

    [RoutePrefix("Services/Evaluation/EvaluationItem"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class EvaluationItemController : ServiceEndpoint
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
        /// <summary>
        /// get the self evaluation items
        /// </summary>
        /// <returns></returns>
        public IEnumerable<MyRow> GetSelfEvaluation()
        {
            using (var conn = SqlConnections.NewByKey("Default"))
            {
                string sql = $"SELECT  f.Name as FirstKpiName ,s.Name as SecondKpiName ,e.Id ,e.Content , e.ContentType , e.Score ,e.Mark , e.IsEnabled ,e.Remark FROM hr.EvaluationItem e LEFT JOIN hr.FirstKPI AS f ON e.FirstKPIId = f.Id LEFT JOIN hr.SecondKPI s ON e.SecondKPIId = s.Id WHERE isselfevaluation = 1 AND e.IsEnabled = 1 ORDER BY f.OrderNo asc, s.OrderNo asc, e.orderNo asc";
                return conn.Query<MyRow>(sql);
            }
        }
        /// <summary>
        /// get the evluation items except self evaluation items
        /// </summary>
        /// <returns></returns>
        public IEnumerable<MyRow> GetEvaluation1()
        {
            using (var conn = SqlConnections.NewByKey("Default"))
            {
                string sql = $"SELECT  f.Name as FirstKpiName ,s.Name as SecondKpiName ,e.Id ,e.Content , e.ContentType , e.Score ,e.Mark , e.IsEnabled ,e.Remark FROM hr.EvaluationItem e LEFT JOIN hr.FirstKPI AS f ON e.FirstKPIId = f.Id LEFT JOIN hr.SecondKPI s ON e.SecondKPIId = s.Id WHERE isselfevaluation = 0 AND e.IsEnabled = 1 AND e.ContentType = 4  ORDER BY f.OrderNo asc, s.OrderNo asc, e.orderNo asc";
                return conn.Query<MyRow>(sql);
            }
        }

        public IEnumerable<MyRow> GetEvaluation2()
        {
            using (var conn = SqlConnections.NewByKey("Default"))
            {
                string sql = $"SELECT  f.Name as FirstKpiName ,s.Name as SecondKpiName ,e.Id ,e.Content , e.ContentType , e.Score ,e.Mark , e.IsEnabled ,e.Remark FROM hr.EvaluationItem e LEFT JOIN hr.FirstKPI AS f ON e.FirstKPIId = f.Id LEFT JOIN hr.SecondKPI s ON e.SecondKPIId = s.Id WHERE isselfevaluation = 0 AND e.IsEnabled = 1 AND e.ContentType = 2   ORDER BY f.OrderNo asc, s.OrderNo asc, e.orderNo asc";
                return conn.Query<MyRow>(sql);
            }
        }
    }
}
