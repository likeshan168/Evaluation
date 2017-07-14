

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Evaluation/EvaluationResultView", typeof(hr.Evaluation.Pages.EvaluationResultViewController))]

namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/EvaluationResultView"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EvaluationResultViewRow))]
    public class EvaluationResultViewController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/EvaluationResultView/EvaluationResultViewIndex.cshtml");
        }
    }
}