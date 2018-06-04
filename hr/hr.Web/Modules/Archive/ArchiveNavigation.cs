
using Serenity.Navigation;
using HR = hr.Archive.Pages;
[assembly: NavigationMenu(8000, "Archive", icon: "fa fa-archive")]
[assembly: NavigationLink(8100, "Archive/CompanyEvaluationArchive", typeof(HR.CompanyEvaluationArchiveController))]
[assembly: NavigationLink(8200, "Archive/SelfEvaluationResultArchive", typeof(HR.SelfEvaluationResultArchiveController))]
[assembly: NavigationLink(8300, "Archive/EvaluationFinalResultArchive", typeof(HR.EvaluationFinalResultArchiveController))]
[assembly: NavigationLink(8400, "Archive/EvaluationFinalResultDetailArchive", typeof(HR.EvaluationFinalResultDetailArchiveController))]
