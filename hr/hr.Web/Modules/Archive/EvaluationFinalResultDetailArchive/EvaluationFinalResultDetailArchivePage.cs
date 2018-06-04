

namespace hr.Archive.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Archive/EvaluationFinalResultDetailArchive"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EvaluationFinalResultDetailArchiveRow))]
    public class EvaluationFinalResultDetailArchiveController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Archive/EvaluationFinalResultDetailArchive/EvaluationFinalResultDetailArchiveIndex.cshtml");
        }
    }
}