﻿
namespace hr.Evaluation.Endpoints
{
    using hr.Evaluation.Entities;
    using hr.Evaluation.Repositories;
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Text;
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
        [AllowAnonymous]
        /// <summary>
        /// get the self evaluation items
        /// </summary>
        /// <returns></returns>
        public IEnumerable<MyRow> GetSelfEvaluation(EvaluationItemRequest request)
        {
            using (var conn = SqlConnections.NewByKey("Default"))
            {
                StringBuilder sb = new StringBuilder();
                sb.Append($"declare @s varchar(4000),@sql varchar(4000) SELECT @s =EvaluationIds from hr.Exam where Id={request.ExamId} ");
                sb.Append($"set @sql='select  f.Name as FirstKpiName ,s.Name as SecondKpiName ,e.Id ,e.Content , e.ContentType , e.Score ,e.Mark , e.IsEnabled ,e.Remark from hr.EvaluationItem e LEFT JOIN hr.FirstKPI AS f ON e.FirstKPIId = f.Id LEFT JOIN hr.SecondKPI s ON e.SecondKPIId = s.Id where isselfevaluation = 1 AND e.IsEnabled = 1 and e.Id IN(select col='''+ replace(@s,',',''' union all select ''')+''') ORDER BY f.OrderNo asc, s.OrderNo asc, e.orderNo asc '");
                sb.Append("exec (@sql) ");
                //string sql = $"SELECT  f.Name as FirstKpiName ,s.Name as SecondKpiName ,e.Id ,e.Content , e.ContentType , e.Score ,e.Mark , e.IsEnabled ,e.Remark FROM hr.EvaluationItem e LEFT JOIN hr.FirstKPI AS f ON e.FirstKPIId = f.Id LEFT JOIN hr.SecondKPI s ON e.SecondKPIId = s.Id WHERE isselfevaluation = 1 AND e.IsEnabled = 1 ORDER BY f.OrderNo asc, s.OrderNo asc, e.orderNo asc";
                return conn.Query<MyRow>(sb.ToString());
            }
        }
        [AllowAnonymous]
        /// <summary>
        /// get the evluation items except self evaluation items
        /// </summary>
        /// <returns></returns>
        public IEnumerable<MyRow> GetEvaluation1(EvaluationItemRequest request)
        {
            using (var conn = SqlConnections.NewByKey("Default"))
            {
                StringBuilder sb = new StringBuilder();
                sb.Append($"declare @s varchar(4000),@sql varchar(4000) SELECT @s =EvaluationIds from hr.Exam where Id={request.ExamId} ");
                sb.Append($"set @sql='select  f.Name as FirstKpiName ,s.Name as SecondKpiName ,e.Id ,e.Content , e.ContentType , e.Score ,e.Mark , e.IsEnabled ,e.Remark from hr.EvaluationItem e LEFT JOIN hr.FirstKPI AS f ON e.FirstKPIId = f.Id LEFT JOIN hr.SecondKPI s ON e.SecondKPIId = s.Id where isselfevaluation = 0 AND e.IsEnabled = 1 AND e.ContentType = 4 and e.Id IN(select col='''+ replace(@s,',',''' union all select ''')+''') ORDER BY f.OrderNo asc, s.OrderNo asc, e.orderNo asc '");
                sb.Append("exec (@sql) ");
                //string sql = $"SELECT  f.Name as FirstKpiName ,s.Name as SecondKpiName ,e.Id ,e.Content , e.ContentType , e.Score ,e.Mark , e.IsEnabled ,e.Remark FROM hr.EvaluationItem e LEFT JOIN hr.FirstKPI AS f ON e.FirstKPIId = f.Id LEFT JOIN hr.SecondKPI s ON e.SecondKPIId = s.Id WHERE isselfevaluation = 0 AND e.IsEnabled = 1 AND e.ContentType = 4  ORDER BY f.OrderNo asc, s.OrderNo asc, e.orderNo asc";
                return conn.Query<MyRow>(sb.ToString());
            }
        }

        [AllowAnonymous]
        public IEnumerable<MyRow> GetEvaluation2(EvaluationItemRequest request)
        {
            using (var conn = SqlConnections.NewByKey("Default"))
            {
                StringBuilder sb = new StringBuilder();
                sb.Append($"declare @s varchar(4000),@sql varchar(4000) SELECT @s =EvaluationIds from hr.Exam where Id={request.ExamId} ");
                sb.Append($"set @sql='select  f.Name as FirstKpiName ,s.Name as SecondKpiName ,e.Id ,e.Content , e.ContentType , e.Score ,e.Mark , e.IsEnabled ,e.Remark from hr.EvaluationItem e LEFT JOIN hr.FirstKPI AS f ON e.FirstKPIId = f.Id LEFT JOIN hr.SecondKPI s ON e.SecondKPIId = s.Id where isselfevaluation = 0 AND e.IsEnabled = 1 AND e.ContentType = 2 and e.Id IN(select col='''+ replace(@s,',',''' union all select ''')+''') ORDER BY f.OrderNo asc, s.OrderNo asc, e.orderNo asc '");
                sb.Append("exec (@sql) ");

                //string sql = $"SELECT  f.Name as FirstKpiName ,s.Name as SecondKpiName ,e.Id ,e.Content , e.ContentType , e.Score ,e.Mark , e.IsEnabled ,e.Remark FROM hr.EvaluationItem e LEFT JOIN hr.FirstKPI AS f ON e.FirstKPIId = f.Id LEFT JOIN hr.SecondKPI s ON e.SecondKPIId = s.Id WHERE isselfevaluation = 0 AND e.IsEnabled = 1 AND e.ContentType = 2   ORDER BY f.OrderNo asc, s.OrderNo asc, e.orderNo asc";
                return conn.Query<MyRow>(sb.ToString());
            }
        }

        [AllowAnonymous]
        /// <summary>
        /// get the self evaluation items
        /// </summary>
        /// <returns></returns>
        public EvaluationItemResponse GetSelfEvaluationByExam(EvaluationItemRequest request)
        {
            using (var conn = SqlConnections.NewByKey("Default"))
            {
                //get the evaluation items by examid
                string sql = $"select * from hr.Exam where Id=${request.ExamId}";
                var exam = conn.Query<ExamRow>(sql).FirstOrDefault();
                //验证一下考核是否已经结束或者还未开始
                ValidateExamDate(exam);

                //sql = $"SELECT  f.Name as FirstKpiName ,s.Name as SecondKpiName ,e.Id ,e.Content , e.ContentType , e.Score ,e.Mark , e.IsEnabled ,e.Remark,d.InputContent,d.Score as FScore FROM hr.EvaluationItem e LEFT JOIN hr.FirstKPI AS f ON e.FirstKPIId = f.Id LEFT JOIN hr.SecondKPI s ON e.SecondKPIId = s.Id LEFT JOIN hr.EvaluationResultDetail d ON d.EvaluationItemId = e.id WHERE isselfevaluation = 1 AND e.IsEnabled = 1 AND d.ExamId={request.ExamId} and d.UserId={request.UserId} ORDER BY f.OrderNo asc, s.OrderNo asc, e.orderNo asc";
                sql = $"SELECT  f.Name as FirstKpiName ,s.Name as SecondKpiName ,e.Id ,e.Content , e.ContentType , e.Score ,e.Mark , e.IsEnabled,d.InputContent,d.Score as FScore FROM hr.EvaluationItem e LEFT JOIN hr.FirstKPI AS f ON e.FirstKPIId = f.Id LEFT JOIN hr.SecondKPI s ON e.SecondKPIId = s.Id LEFT JOIN hr.EvaluationResultDetail d ON d.EvaluationItemId = e.id WHERE isselfevaluation = 1 AND e.IsEnabled = 1 AND d.ExamId={request.ExamId} and d.UserId={request.UserId} ORDER BY f.OrderNo asc, s.OrderNo asc, e.orderNo asc;" +
                    $"select * from hr.SelfEvaluationRecord where IsSelfEvaluated = 1 and ExamId={request.ExamId} and UserId={request.UserId};" +
                    $"select * from hr.[CompanyEvaluation] where UserId={request.UserId} and ExamId={request.ExamId};";
                var gridReader = conn.QueryMultiple(sql);//.DistinctBy(p => new { p.Id });

                var items = gridReader.Read<EvaluationItemViewModel>().DistinctBy(p => new { p.Id });
                //判断是否已经进行过自我评价，如果已经进行过自我评价的话，则被考核人，就不能再进行自我评价
                var selfEvaluationRecord = gridReader.Read<SelfEvaluationRecordRow>().ToList();
                bool isSelfEvaluated = false;
                if (selfEvaluationRecord?.Count > 0)
                {
                    isSelfEvaluated = true;
                }
                if (exam != null)
                {
                    var itemIds = exam.EvaluationIds.Split(',');

                    items = items.Where(p => itemIds.Contains(p.Id.ToString()));
                }

                //判断是否已经对公司进行过评价
                var companyEvaluated = gridReader.Read<CompanyEvaluationRow>().ToList();
                var isCompanyEvaluated = false;
                if (companyEvaluated?.Count > 0)
                {
                    isCompanyEvaluated = true;
                }

                return new EvaluationItemResponse
                {
                    Items = items.ToList(),
                    IsSelfEvaluated = isSelfEvaluated,
                    IsCompanyEvaluated = isCompanyEvaluated
                };
            }
        }
        [AllowAnonymous]
        /// <summary>
        /// get the self evaluation items
        /// </summary>
        /// <returns></returns>
        public IEnumerable<EvaluationItemViewModel> GetSelfEvaluation1ByExam(EvaluationItemRequest request)
        {
            using (var conn = SqlConnections.NewByKey("Default"))
            {
                //get the evaluation items by examid
                string sql = $"select * from hr.Exam where Id=${request.ExamId}";
                var exam = conn.Query<ExamRow>(sql).FirstOrDefault();
                //验证一下考核是否已经结束或者还未开始
                ValidateExamDate(exam);
                sql = $"SELECT  f.Name as FirstKpiName ,s.Name as SecondKpiName ,e.Id ,e.Content , e.ContentType , e.Score ,e.Mark , e.IsEnabled ,e.Remark,d.InputContent,d.Score as FScore FROM hr.EvaluationItem e LEFT JOIN hr.FirstKPI AS f ON e.FirstKPIId = f.Id LEFT JOIN hr.SecondKPI s ON e.SecondKPIId = s.Id LEFT JOIN hr.EvaluationResultDetail d ON d.EvaluationItemId = e.id WHERE isselfevaluation = 1 AND e.IsEnabled = 1 AND d.ExamId={request.ExamId} and d.UserId={request.UserId} and EvaluationUserId={int.Parse(Authorization.UserId)} ORDER BY f.OrderNo asc, s.OrderNo asc, e.orderNo asc";
                //sql = $"SELECT  f.Name as FirstKpiName ,s.Name as SecondKpiName ,e.Id ,e.Content , e.ContentType , e.Score ,e.Mark , e.IsEnabled,d.InputContent,d.Score as FScore FROM hr.EvaluationItem e LEFT JOIN hr.FirstKPI AS f ON e.FirstKPIId = f.Id LEFT JOIN hr.SecondKPI s ON e.SecondKPIId = s.Id LEFT JOIN hr.EvaluationResultDetail d ON d.EvaluationItemId = e.id WHERE isselfevaluation = 1 AND e.IsEnabled = 1 AND d.ExamId={request.ExamId} and d.UserId={request.UserId} and EvaluationUserId={int.Parse(Authorization.UserId)} ORDER BY f.OrderNo asc, s.OrderNo asc, e.orderNo asc";
                var items = conn.Query<EvaluationItemViewModel>(sql);

                if (exam != null)
                {
                    var itemIds = exam.EvaluationIds.Split(',');

                    return items.Where(p => itemIds.Contains(p.Id.ToString()));
                }

                return items;
            }
        }
        [AllowAnonymous]
        /// <summary>
        /// get the evluation items except self evaluation items
        /// </summary>
        /// <returns></returns>
        public IEnumerable<EvaluationItemViewModel> GetEvaluation1ByExam(EvaluationItemRequest request)
        {
            using (var conn = SqlConnections.NewByKey("Default"))
            {
                //get the evaluation items by examid
                string sql = $"select * from hr.Exam where Id=${request.ExamId}";
                var exam = conn.Query<ExamRow>(sql).FirstOrDefault();
                //验证一下考核是否已经结束或者还未开始
                ValidateExamDate(exam);
                sql = $"SELECT  f.Name as FirstKpiName ,s.Name as SecondKpiName ,e.Id ,e.Content , e.ContentType , e.Score ,e.Mark , e.IsEnabled ,e.Remark,d.InputContent,d.Score as FScore FROM hr.EvaluationItem e LEFT JOIN hr.FirstKPI AS f ON e.FirstKPIId = f.Id LEFT JOIN hr.SecondKPI s ON e.SecondKPIId = s.Id LEFT JOIN hr.EvaluationResultDetail d ON d.EvaluationItemId = e.id WHERE isselfevaluation = 0 AND e.IsEnabled = 1 AND e.ContentType = 4  AND d.ExamId={request.ExamId} and d.UserId={request.UserId} and d.EvaluationUserId={int.Parse(Authorization.UserId)} ORDER BY f.OrderNo asc, s.OrderNo asc, e.orderNo asc";
                var items = conn.Query<EvaluationItemViewModel>(sql);
                if (exam != null)
                {
                    var itemIds = exam.EvaluationIds.Split(',');

                    return items.Where(p => itemIds.Contains(p.Id.ToString()));
                }

                return items;

            }
        }

        [AllowAnonymous]
        public IEnumerable<EvaluationItemViewModel> GetEvaluation2ByExam(EvaluationItemRequest request)
        {
            using (var conn = SqlConnections.NewByKey("Default"))
            {
                //get the evaluation items by examid
                string sql = $"select * from hr.Exam where Id=${request.ExamId}";
                var exam = conn.Query<ExamRow>(sql).FirstOrDefault();
                //验证一下考核是否已经结束或者还未开始
                ValidateExamDate(exam);
                sql = $"SELECT  f.Name as FirstKpiName ,s.Name as SecondKpiName ,e.Id ,e.Content , e.ContentType , e.Score ,e.Mark , e.IsEnabled ,e.Remark,d.InputContent,d.Score as FScore FROM hr.EvaluationItem e LEFT JOIN hr.FirstKPI AS f ON e.FirstKPIId = f.Id LEFT JOIN hr.SecondKPI s ON e.SecondKPIId = s.Id LEFT JOIN hr.EvaluationResultDetail d ON d.EvaluationItemId = e.id WHERE isselfevaluation = 0 AND e.IsEnabled = 1 AND e.ContentType = 2  AND d.ExamId={request.ExamId} and d.UserId={request.UserId} and d.EvaluationUserId={int.Parse(Authorization.UserId)} ORDER BY f.OrderNo asc, s.OrderNo asc, e.orderNo asc";
                var items = conn.Query<EvaluationItemViewModel>(sql);
                if (exam != null)
                {
                    var itemIds = exam.EvaluationIds.Split(',');

                    return items.Where(p => itemIds.Contains(p.Id.ToString()));
                }

                return items;
            }
        }

        [AllowAnonymous]
        public IEnumerable<UserViewModel> GetUserToUsers()
        {
            using (var conn = SqlConnections.NewByKey("Default"))
            {
                string sql = $"SELECT r.UserId,us.Username, u.HasEvaluated FROM hr.UserEvaluationToUser u LEFT JOIN hr.UserEvaluationRelation r ON u.UserEvaluationRelationId = r.Id LEFT JOIN dbo.Users us ON us.UserId = r.UserId WHERE u.UserId = {int.Parse(Authorization.UserId)}";
                return conn.Query<UserViewModel>(sql);
            }
        }

        private bool ValidateExamDate(ExamRow exam)
        {
            DateTime now = DateTime.Now;
            if (exam.StartDate > now)
            {
                throw new ValidationError("EvaluationError", Texts.Evaluation.EvaluationNotStart);
            }
            else if (exam.EndDate != null && exam.EndDate.Value.AddDays(1) < now) //第二天凌晨结束
            {
                throw new ValidationError("EvaluationError", Texts.Evaluation.EvaluationEnded);
            }

            return true;
        }
    }
}
