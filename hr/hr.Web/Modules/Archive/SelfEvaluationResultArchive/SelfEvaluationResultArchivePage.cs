


namespace hr.Archive.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Archive/SelfEvaluationResultArchive"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SelfEvaluationResultArchiveRow))]
    public class SelfEvaluationResultArchiveController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Archive/SelfEvaluationResultArchive/SelfEvaluationResultArchiveIndex.cshtml");
        }
    }
}