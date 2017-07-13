
using Serenity.Navigation;
using HR = hr.Evaluation.Pages;

[assembly: NavigationMenu(7000, "Evaluation", icon: "fa fa-commenting")]
[assembly: NavigationLink(7100, "Evaluation/FirstKpi", typeof(HR.FirstKpiController))]
[assembly: NavigationLink(7200, "Evaluation/SecondKpi", typeof(HR.SecondKpiController))]
[assembly: NavigationLink(7300, "Evaluation/EvaluationItem", typeof(HR.EvaluationItemController))]
[assembly: NavigationLink(7400, "Evaluation/EvaluationItemP", typeof(HR.EvaluationItemController),action: "PreviewSelfEvaluation")]
[assembly: NavigationLink(7500, "Evaluation/Exam", typeof(HR.ExamController))]
[assembly: NavigationLink(7600, "Evaluation/UserEvaluationRelation", typeof(HR.UserEvaluationRelationController))]
//[assembly: NavigationLink(7700, "Evaluation/EvaluationResult", typeof(HR.EvaluationResultController))]


[assembly: NavigationLink(7800, "Evaluation/Employee", typeof(HR.EmployeeController))]
//[assembly: NavigationLink(7900, "Evaluation/Department", typeof(HR.DepartmentController))]
//[assembly: NavigationLink(8000, "Evaluation/ToDoList", typeof(HR.ToDoListController))]

[assembly: NavigationLink(8100, "Evaluation/LeaderShip", typeof(HR.LeaderShipController))]

//[assembly: NavigationLink(8200, "Evaluation/EvaluationFinalResult", typeof(HR.EvaluationFinalResultController))]


//[assembly: NavigationLink(9700, "Evaluation/Employee", typeof(HR.EmployeeController), icon: "fa fa-users")]
//[assembly: NavigationLink(9800, "Evaluation/Department", typeof(HR.DepartmentController), icon: "fa fa-building")]

