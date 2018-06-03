
namespace hr.Common.Pages
{
    using CsQuery.ExtensionMethods;
    using hr.Evaluation.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Web.Mvc;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Dashboard.DashboardIndex, GetToDoList());
        }

        private IEnumerable<DashboardPageModel> GetToDoList()
        {
            using (var conn = SqlConnections.NewByKey(Constants.Db.ConnectionName))
            {
                var user = (UserDefinition)Authorization.UserDefinition;

                var exams = conn.Query<ExamRow>($"SELECT Id, Title, StartDate,EndDate FROM hr.Exam WHERE IsEnabled = 1 And EndDate >= CONVERT(VARCHAR(20),GETDATE(),23);");
                var models = new List<DashboardPageModel>();
                StringBuilder sb = new StringBuilder();
                foreach (var exam in exams)
                {
                    var sql = $"select * from hr.SelfEvaluationRecord where IsSelfEvaluated = 1 and ExamId={exam.Id} and UserId={user.UserId};" +
                     $"select * from hr.[CompanyEvaluation] where UserId={user.UserId} and ExamId={exam.Id};";
                    var gridReader = conn.QueryMultiple(sql);
                    var selfEvaluationRecord = gridReader.Read<SelfEvaluationRecordRow>().ToList();
                    bool isSelfEvaluated = false;
                    if (selfEvaluationRecord?.Count > 0)
                    {
                        isSelfEvaluated = true;
                    }

                    var companyEvaluated = gridReader.Read<CompanyEvaluationRow>().ToList();
                    var isCompanyEvaluated = false;
                    if (companyEvaluated?.Count > 0)
                    {
                        isCompanyEvaluated = true;
                    }

                    models.Add(new DashboardPageModel
                    {
                        Id = exam.Id,
                        Title = exam.Title,
                        StartDate = exam.StartDate,
                        EndDate = exam.EndDate,
                        IsCompanyEvaluated = isCompanyEvaluated,
                        IsSelfEvaluated = isSelfEvaluated,
                        UserId = user.UserId
                    });
                }

                return models;
                //return conn.Query<DashboardPageModel>($"SELECT t.Title, t.Content, t.StartDate, t.EndDate, u2.Username as CreateBy, t.Url, t.ExamId FROM hr.ToDoList AS t LEFT JOIN dbo.Users AS u ON t.UserId = u.UserId LEFT JOIN dbo.Users AS u2 ON u2.UserId = t.CreateBy WHERE t.IsComplete = 0 AND IsEnabled=1 AND t.EndDate >= CONVERT(VARCHAR(20),GETDATE(),23) and t.UserId={int.Parse(((UserDefinition)Authorization.UserDefinition).Id)}");
            }
        }
    }
}
