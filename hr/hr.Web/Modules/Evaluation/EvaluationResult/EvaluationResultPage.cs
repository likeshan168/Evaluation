


namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/EvaluationResult"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EvaluationResultRow))]
    public class EvaluationResultController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/EvaluationResult/EvaluationResultIndex.cshtml");
        }
    }
}