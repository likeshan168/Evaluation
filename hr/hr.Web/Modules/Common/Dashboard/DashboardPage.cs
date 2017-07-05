
namespace hr.Common.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections;
    using System.Collections.Generic;
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
                //if (Authorization.Username=="admin")
                //{
                //    return conn.Query<DashboardPageModel>($"SELECT t.Title, t.Content, t.StartDate, t.EndDate, u2.Username as CreateBy, t.Url FROM hr.ToDoList AS t LEFT JOIN dbo.Users AS u ON t.UserId = u.UserId LEFT JOIN dbo.Users AS u2 ON u2.UserId = t.CreateBy WHERE t.IsComplete = 0 AND t.EndDate >= GETDATE()");
                //}
                //if (Authorization.HasPermission(Administration.PermissionKeys.Security))
                //{
                //    return conn.Query<DashboardPageModel>($"SELECT t.Title, t.Content, t.StartDate, t.EndDate, u2.Username as CreateBy, t.Url FROM hr.ToDoList AS t LEFT JOIN dbo.Users AS u ON t.UserId = u.UserId LEFT JOIN dbo.Users AS u2 ON u2.UserId = t.CreateBy WHERE t.IsComplete = 0 AND t.EndDate >= GETDATE()");
                //}
                //else
                //{
                return conn.Query<DashboardPageModel>($"SELECT t.Title, t.Content, t.StartDate, t.EndDate, u2.Username as CreateBy, t.Url, t.ExamId FROM hr.ToDoList AS t LEFT JOIN dbo.Users AS u ON t.UserId = u.UserId LEFT JOIN dbo.Users AS u2 ON u2.UserId = t.CreateBy WHERE t.IsComplete = 0 AND t.EndDate >= GETDATE() and t.UserId={int.Parse(((UserDefinition)Authorization.UserDefinition).Id)}");
                //}
            }
        }
    }
}
