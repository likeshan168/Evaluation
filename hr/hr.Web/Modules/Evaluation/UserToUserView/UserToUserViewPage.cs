

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Evaluation/UserToUserView", typeof(hr.Evaluation.Pages.UserToUserViewController))]

namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/UserToUserView"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UserToUserViewRow))]
    public class UserToUserViewController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/UserToUserView/UserToUserViewIndex.cshtml");
        }
    }
}