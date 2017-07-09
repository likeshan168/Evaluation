

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Evaluation/EvaluationResultDetail", typeof(hr.Evaluation.Pages.EvaluationResultDetailController))]

namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/EvaluationResultDetail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EvaluationResultDetailRow))]
    public class EvaluationResultDetailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/EvaluationResultDetail/EvaluationResultDetailIndex.cshtml");
        }
    }
}