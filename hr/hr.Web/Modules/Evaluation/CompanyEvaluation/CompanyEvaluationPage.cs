

namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/CompanyEvaluation"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CompanyEvaluationRow))]
    public class CompanyEvaluationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/CompanyEvaluation/CompanyEvaluationIndex.cshtml");
        }
    }
}