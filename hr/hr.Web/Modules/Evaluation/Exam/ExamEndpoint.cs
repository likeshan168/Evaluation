
namespace hr.Evaluation.Endpoints
{
    using hr.Evaluation.Entities;
    using hr.Evaluation.Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Configuration;
    using System.Data;
    using System.Data.SqlClient;
    using System.Text;
    using System.Web.Mvc;
    using MyRepository = Repositories.ExamRepository;
    using MyRow = Entities.ExamRow;

    [RoutePrefix("Services/Evaluation/Exam"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ExamController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //同事更新任务结束时间
            var res = new MyRepository().Update(uow, request);
            //uow.Connection.Execute($"update hr.ToDoList set EndDate='{request.Entity.EndDate.Value.ToString("yyyy-MM-dd")}' where IsEnabled =1 and IsComplete = 0 and ExamId = {request.Entity.Id.Value}");
            return res;
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            //删除考核之前，需要删除考核关系和考核结果
            //new UserEvaluationRelationRepository().Delete(uow, new DeleteRequest { });
            var relations = new UserEvaluationRelationRepository().List(uow.Connection, new ListRequest
            {
                EqualityFilter = new System.Collections.Generic.Dictionary<string, object>
                {
                    { UserEvaluationRelationRow.Fields.ExamId.Name,request.EntityId}
                }
            }).Entities;
            StringBuilder sb = new StringBuilder();
            int examId = int.Parse(request.EntityId.ToString());
            if (relations != null)
            {
                foreach (var item in relations)
                {
                    sb.Append($"delete from [hr].[UserEvaluationToUser] where UserEvaluationRelationId={item.Id};");
                }
                sb.Append($"delete from [hr].[UserEvaluationRelation] where ExamId={examId}");
                sb.Append($"delete from [hr].[EvaluationResultDetail] where ExamId={examId}");
                if (sb.Length != 0)
                {
                    uow.Connection.Execute(sb.ToString());
                }
            }
            return new MyRepository().Delete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public SaveResponse Archive(ArchiveRequest request)
        {
            using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings[Constants.Db.ConnectionName].ConnectionString))
            {
                if (connection.State == ConnectionState.Closed)
                {
                    connection.Open();
                }
                var tran = connection.BeginTransaction();
                try
                {
                    var cmd = new SqlCommand();
                    cmd.Connection = connection;
                    cmd.Transaction = tran;
                    //归档公司评价
                    cmd.CommandText = $"insert into hr.CompanyEvaluation_Archive " +
                    $"select e.Title, Username as UserName ,c.EvaluationContent,d.Name as DepartmentName from hr.CompanyEvaluation c left join dbo.Users u on c.UserId = u.UserId " +
                    $"left join hr.Exam e on e.id = c.ExamId " +
                    $"LEFT JOIN hr.Department d on d.Id = u.DepartmentId where e.Id = {request.ExamId};";
                    cmd.ExecuteNonQuery();
                    //归档自我评价
                    cmd.CommandText = $"insert into hr.SelfEvaluationResult_Archive " +
                    $"select Title as ExamTitle, Username as UserName, Content as ExamContent, InputContent, DepartmentName " +
                    $"from hr.SelfEvaluationResult where Title='{request.Title}';";
                    cmd.ExecuteNonQuery();
                    //归档考核结果
                    cmd.CommandText = $"insert into hr.EvaluationFinalResult_Archive " +
                    $"select Title as ExamTitle, Username as UserName, TotalScore,Grade, DepartmentName " +
                    $"from hr.EvaluationFinalResult where ExamId={request.ExamId};";
                    cmd.ExecuteNonQuery();
                    //过当考核结果明细
                    cmd.CommandText = $"insert into hr.EvaluationFinalResultDetail_Archive " +
                    $"select Title as ExamTitle, Username as UserName, TotalScore as Score,EvaluationUser as EvaluationUserName, DepartmentName from hr.EvaluationResultView where ExamId={request.ExamId};";
                    cmd.ExecuteNonQuery();

                    //删除已经归档的考核
                    //删除考核之前，需要删除考核关系和考核结果
                    //var cmd2 = new SqlCommand();
                    //cmd2.Connection = connection;
                    //cmd2.CommandText = $"select Id from hr.[UserEvaluationRelation] where ExamId={request.ExamId};";
                    //var reader = cmd2.ExecuteReader();
                    StringBuilder sb = new StringBuilder();
                    sb.Append($"delete from [hr].[UserEvaluationToUser] where UserEvaluationRelationId in (select Id from hr.[UserEvaluationRelation] where ExamId={request.ExamId});");
                    sb.Append($"delete from [hr].[UserEvaluationRelation] where ExamId={request.ExamId}");
                    sb.Append($"delete from [hr].[EvaluationResultDetail] where ExamId={request.ExamId}");
                    if (sb.Length != 0)
                    {
                        cmd.CommandText = sb.ToString();
                        cmd.ExecuteNonQuery();
                    }
                    //}
                    cmd.CommandText = $"delete from hr.[Exam] where Id ={request.ExamId};";
                    cmd.ExecuteNonQuery();

                    tran.Commit();
                }
                catch (System.Exception ex)
                {
                    tran.Rollback();
                    throw ex;
                }

                return new SaveResponse();
            };

        }
    }
}
