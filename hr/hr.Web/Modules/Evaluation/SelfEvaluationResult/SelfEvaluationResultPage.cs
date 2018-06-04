

namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/SelfEvaluationResult"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SelfEvaluationResultRow))]
    public class SelfEvaluationResultController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/SelfEvaluationResult/SelfEvaluationResultIndex.cshtml");
        }
    }
}