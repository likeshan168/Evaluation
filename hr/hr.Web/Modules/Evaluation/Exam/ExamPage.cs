


namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/Exam"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ExamRow))]
    public class ExamController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/Exam/ExamIndex.cshtml");
        }
    }
}