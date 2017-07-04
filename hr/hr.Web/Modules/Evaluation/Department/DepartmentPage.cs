


namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/Department"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DepartmentRow))]
    public class DepartmentController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/Department/DepartmentIndex.cshtml");
        }
    }
}