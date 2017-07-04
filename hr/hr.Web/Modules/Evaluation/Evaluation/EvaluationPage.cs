


namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/Evaluation"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.ToDoListRow))]
    [Authorize]
    public class EvaluationController : Controller
    {
        public ActionResult SelfEvaluation()
        {
            return View("~/Modules/Evaluation/Evaluation/SelfEvaluation.cshtml");
        }

        public ActionResult SelfEvaluation1()
        {
            return View("~/Modules/Evaluation/Evaluation/SelfEvaluation1.cshtml");
        }
        public ActionResult Evaluation1()
        {
            return View("~/Modules/Evaluation/Evaluation/Evaluation1.cshtml");
        }
        public ActionResult Evaluation2()
        {
            return View("~/Modules/Evaluation/Evaluation/Evaluation2.cshtml");
        }
    }
}