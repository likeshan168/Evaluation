

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Archive/ExamArchive", typeof(hr.Archive.Pages.ExamArchiveController))]

namespace hr.Archive.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Archive/ExamArchive"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ExamArchiveRow))]
    public class ExamArchiveController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Archive/ExamArchive/ExamArchiveIndex.cshtml");
        }

         public ActionResult SelfEvaluation()
        {
            return View("~/Modules/Archive/ExamArchive/SelfEvaluation.cshtml");
        }

        //public ActionResult PreviewCompanyEvaluation()
        //{
        //    return View("~/Modules/Evaluation/EvaluationItem/EvaluationItemPreviewCompanyEvaluation.cshtml");
        //}

        //public ActionResult PreviewSelfEvaluation0()
        //{
        //    return View("~/Modules/Evaluation/EvaluationItem/EvaluationItemPreviewSelfEvaluation0.cshtml");
        //}

        public ActionResult Evaluation1()
        {
            return View("~/Modules/Archive/ExamArchive/Evaluation1.cshtml");
        }
        public ActionResult Evaluation2()
        {
            return View("~/Modules/Archive/ExamArchive/Evaluation2.cshtml");
        }
    }
}