


namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/Employee"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmployeeRow))]
    public class EmployeeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/Employee/EmployeeIndex.cshtml");
        }
    }
}