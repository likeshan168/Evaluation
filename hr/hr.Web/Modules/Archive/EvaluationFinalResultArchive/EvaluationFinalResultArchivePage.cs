

namespace hr.Archive.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Archive/EvaluationFinalResultArchive"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EvaluationFinalResultArchiveRow))]
    public class EvaluationFinalResultArchiveController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Archive/EvaluationFinalResultArchive/EvaluationFinalResultArchiveIndex.cshtml");
        }
    }
}