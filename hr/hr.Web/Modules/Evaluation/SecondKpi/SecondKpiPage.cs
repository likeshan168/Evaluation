

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Evaluation/SecondKpi", typeof(hr.Evaluation.Pages.SecondKpiController))]

namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/SecondKpi"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SecondKpiRow))]
    public class SecondKpiController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/SecondKpi/SecondKpiIndex.cshtml");
        }
    }
}