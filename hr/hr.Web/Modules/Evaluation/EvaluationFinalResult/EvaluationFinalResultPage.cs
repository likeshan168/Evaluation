

namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/EvaluationFinalResult"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EvaluationFinalResultRow))]
    public class EvaluationFinalResultController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/EvaluationFinalResult/EvaluationFinalResultIndex.cshtml");
        }
    }
}