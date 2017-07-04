

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Evaluation/FirstKpi", typeof(hr.Evaluation.Pages.FirstKpiController))]

namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/FirstKpi"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FirstKpiRow))]
    public class FirstKpiController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/FirstKpi/FirstKpiIndex.cshtml");
        }
    }
}