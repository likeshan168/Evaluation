


namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/UserEvaluationRelation"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UserEvaluationRelationRow))]
    public class UserEvaluationRelationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/UserEvaluationRelation/UserEvaluationRelationIndex.cshtml");
        }
    }
}