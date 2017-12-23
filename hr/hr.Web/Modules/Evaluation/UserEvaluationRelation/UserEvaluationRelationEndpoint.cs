
using System.IO;
using Serenity.Web;

namespace hr.Evaluation.Endpoints
{
    using Hangfire;
    using hr.Administration.Entities;
    using hr.Administration.Repositories;
    using hr.Evaluation.Entities;
    using hr.Evaluation.Repositories;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Text;
    using System.Web.Mvc;
    using MyRepository = Repositories.UserEvaluationRelationRepository;
    using MyRow = Entities.UserEvaluationRelationRow;

    [RoutePrefix("Services/Evaluation/UserEvaluationRelation"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class UserEvaluationRelationController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //HttpContext.Current.Request.Url.Host;
            return new MyRepository() { WebRequest = HttpContext.Request }.Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            // first update the isenabled to false
            //second delete the related evaluation result records
            var relation = Retrieve(uow.Connection, new RetrieveRequest { EntityId = request.EntityId }).Entity;
            if (relation != null)
            {
                //string sql = $"UPDATE hr.ToDoList SET IsEnabled=0 WHERE UserId={relation.UserId} AND ExamId = {relation.ExamId};delete from hr.EvaluationResultDetail where UserId={relation.UserId} and ExamId={relation.ExamId}";
                //由于没有启用todolist,所有把关于todolist相关的操作都删除掉
                string sql = $"delete from hr.EvaluationResultDetail where UserId={relation.UserId} and ExamId={relation.ExamId}";
                uow.Connection.Execute(sql);
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

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public ServiceResponse BatchSendEmail(IDbConnection connection, BatchEmailRequest request)
        {
            if (request != null && request.Users != null)
            {
                //获取所有的用户信息以及考核信息
                StringBuilder sb = new StringBuilder();
                sb.Append($"select * from hr.UserToUserView where UserId in(");
                foreach (var item in request.Users)
                {
                    sb.Append($"{item.UserId},");
                }
                sb.Remove(sb.Length - 1, 1);
                sb.Append(") and ExamId in(");
                var examIdQuery = request.Users.Select(p => p.ExamId).Distinct();
                foreach (var item in examIdQuery)
                {
                    sb.Append($"{item},");
                }
                sb.Remove(sb.Length - 1, 1);
                sb.Append(");");
                var users = connection.Query<UserToUserViewRow>(sb.ToString()).DistinctBy(p => new { p.UserId, p.ExamId });
                //发送邮件
                foreach (var user in users)
                {
                    BackgroundJob.Enqueue(() => EmailMangement.Send(user.Title, user.Username, user.Email, "http://" + HttpContext.Request.Url.Host + ':' + HttpContext.Request.Url.Port));
                }
            }

            return new ServiceResponse();

        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public ServiceResponse BatchDelete(IUnitOfWork uow, BatchDeleteRequest request)
        {
            StringBuilder sb = new StringBuilder();
            StringBuilder sb2 = new StringBuilder();
            foreach (var item in request.Ids)
            {
                var relation = Retrieve(uow.Connection, new RetrieveRequest { EntityId = item }).Entity;
                if (relation != null)
                {
                    //string sql = $"UPDATE hr.ToDoList SET IsEnabled=0 WHERE UserId={relation.UserId} AND ExamId = {relation.ExamId};delete from hr.EvaluationResultDetail where UserId={relation.UserId} and ExamId={relation.ExamId}";
                    //由于没有启用todolist,所有把关于todolist相关的操作都删除掉
                    sb.Append($"delete from hr.EvaluationResultDetail where UserId={relation.UserId} and ExamId={relation.ExamId};");
                    //uow.Connection.Execute(sql);
                    sb.Append($"delete from hr.UserEvaluationToUser where UserId={relation.UserId} and UserEvaluationRelationId={relation.Id};");
                    sb2.Append($"delete from hr.UserEvaluationRelation where Id = {item};");
                }
            }
            if (sb.Length > 0)
            {
                uow.Connection.Execute(sb.ToString());
                
                if (sb2.Length > 0)
                {
                    uow.Connection.Execute(sb2.ToString());
                }
            }
           
            return new ServiceResponse();
        }

        public FileContentResult ExcelTemplate(IDbConnection connection, ListRequest request)
        {
            FileInfo file = new FileInfo(Server.MapPath("~/ExcelTemplate/考核关系.xlsx"));
            using (FileStream fs = file.OpenRead())
            {
                BinaryReader r = new BinaryReader(fs);
                r.BaseStream.Seek(0, SeekOrigin.Begin);    //将文件指针设置到文件开
                byte[] bytes = r.ReadBytes((int)r.BaseStream.Length);
                return ExcelContentResult.Create(bytes, "考核关系.xlsx");
            }
        }
    }
}
