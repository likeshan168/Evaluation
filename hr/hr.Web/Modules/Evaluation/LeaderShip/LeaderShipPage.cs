

namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/LeaderShip"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LeaderShipRow))]
    public class LeaderShipController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/LeaderShip/LeaderShipIndex.cshtml");
        }
    }
}