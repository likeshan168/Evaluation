


namespace hr.Evaluation.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Evaluation/ToDoList"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ToDoListRow))]
    public class ToDoListController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Evaluation/ToDoList/ToDoListIndex.cshtml");
        }
    }
}