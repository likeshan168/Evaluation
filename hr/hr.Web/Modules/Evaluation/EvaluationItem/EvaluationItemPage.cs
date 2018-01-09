


namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/EvaluationItem"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EvaluationItemRow))]
    public class EvaluationItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/EvaluationItem/EvaluationItemIndex.cshtml");
        }

        public ActionResult PreviewSelfEvaluation()
        {
            return View("~/Modules/Evaluation/EvaluationItem/EvaluationItemPreviewSelfEvaluation.cshtml");
        }

        public ActionResult PreviewCompanyEvaluation()
        {
            return View("~/Modules/Evaluation/EvaluationItem/EvaluationItemPreviewCompanyEvaluation.cshtml");
        }

        public ActionResult PreviewSelfEvaluation0()
        {
            return View("~/Modules/Evaluation/EvaluationItem/EvaluationItemPreviewSelfEvaluation0.cshtml");
        }

        public ActionResult PreviewEvaluation()
        {
            return View("~/Modules/Evaluation/EvaluationItem/EvaluationItemPreviewEvaluation.cshtml");
        }
        public ActionResult PreviewEvaluation2()
        {
            return View("~/Modules/Evaluation/EvaluationItem/EvaluationItemPreviewEvaluation2.cshtml");
        }
    }
}