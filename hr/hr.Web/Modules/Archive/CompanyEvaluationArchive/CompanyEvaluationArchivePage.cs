



namespace hr.Archive.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Archive/CompanyEvaluationArchive"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CompanyEvaluationArchiveRow))]
    public class CompanyEvaluationArchiveController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Archive/CompanyEvaluationArchive/CompanyEvaluationArchiveIndex.cshtml");
        }
    }
}