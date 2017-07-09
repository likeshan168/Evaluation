

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Evaluation/ScoreDetail", typeof(hr.Evaluation.Pages.ScoreDetailController))]

namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/ScoreDetail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ScoreDetailRow))]
    public class ScoreDetailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/ScoreDetail/ScoreDetailIndex.cshtml");
        }
    }
}