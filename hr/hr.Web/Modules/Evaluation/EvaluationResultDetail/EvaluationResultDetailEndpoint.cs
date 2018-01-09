
namespace hr.Evaluation.Endpoints
{
    using hr.Administration.Repositories;
    using hr.Evaluation.Entities;
    using hr.Evaluation.Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.EvaluationResultDetailRepository;
    using MyRow = Entities.EvaluationResultDetailRow;

    [RoutePrefix("Services/Evaluation/EvaluationResultDetail"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    //[ConnectionKey(typeof(MyRow))]
    public class EvaluationResultDetailController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        //[HttpPost, AllowAnonymous]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        //[HttpPost, AllowAnonymous]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
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

        //[HttpPost, AuthorizeCreate(typeof(MyRow))]
        [HttpPost, AllowAnonymous]
        public SaveResponse Add(IUnitOfWork uow, AddEvaluationResultRequest<MyRow> request)
        {
            var rep = new MyRepository();
            int evaluationUserId;
            bool isSelfEvaluation = false;
            int examId = 0;
            int? userId = 0;
            foreach (var item in request.Entities)
            {
                if (examId == 0 || userId == 0)
                {
                    examId = item.ExamId.Value;
                    userId = item.UserId;
                }

                if (item.EvaluationUserId.HasValue)
                {
                    evaluationUserId = item.EvaluationUserId.Value;
                    //只有是自我评价的时候，才会上传EvaluationUserId这个参数
                    isSelfEvaluation = true;

                }
                else
                {
                    evaluationUserId = int.Parse(Authorization.UserId);
                }

                var result = uow.Connection.Query<MyRow>($"select * from hr.EvaluationResultDetail where EvaluationItemId={item.EvaluationItemId} and ExamId={item.ExamId} and UserId={item.UserId} and EvaluationUserId={evaluationUserId}").FirstOrDefault();
                if (result == null)
                {
                    //rep.Create(uow, new SaveRequest<MyRow>
                    //{
                    //    Entity = item
                    //});
                    //uow.Connection.Execute($"insert into hr.EvaluationResultDetail(ExamId,EvaluationItemId, InputContent, UserId,Score, EvaluationUserId) values({item.ExamId},{item.EvaluationItemId},'{item.InputContent}',{item.UserId},{item.Score},{item.EvaluationUserId}) ;");
                }
                else
                {
                    //update
                    if (isSelfEvaluation && string.IsNullOrWhiteSpace(item.InputContent))
                    {
                        //在服务器端进行判断，如果还有未进行评估的就报错
                        throw new ValidationError("EvaluationError", Texts.Evaluation.EvaluationError);
                    }
                    else if (!isSelfEvaluation && !item.Score.HasValue)
                    {
                        throw new ValidationError("EvaluationError", Texts.Evaluation.EvaluationError);
                    }
                    item.EvaluationUserId = evaluationUserId;
                    rep.Update(uow, new SaveRequest<MyRow>
                    {
                        EntityId = result.Id,
                        Entity = item
                    });
                    //if (string.IsNullOrWhiteSpace(item.InputContent))
                    //{
                    //    uow.Connection.Execute($"update hr.EvaluationResultDetail set Score={item.Score.Value} where Id={result.Id};");
                    //}
                    //else
                    //{
                    //    uow.Connection.Execute($"update hr.EvaluationResultDetail set Score={item.Score.Value}, InputContent='{item.InputContent}' where Id={result.Id};");
                    //}
                }
            }
            //在完成自我评价之后，通知其他的评估人对本人进行评估
            if (isSelfEvaluation)
            {
                //发送邮件通知评估人进行评估
                //var equalityFilter = new Dictionary<string, object>();
                //equalityFilter.Add(UserToUserViewRow.Fields.UserId.Name, Authorization.UserId);
                //equalityFilter.Add(UserToUserViewRow.Fields.ExamId.Name, examId);
                //var evaluationUsers = new UserToUserViewRepository().List(uow.Connection, new ListRequest
                //{
                //    EqualityFilter = equalityFilter
                //});

                var evaluationUsers = uow.Connection.Query<UserToUserViewRow>($"select * from hr.UserToUserView where UserId={Authorization.UserId} and ExamId={examId}");

                //var examEqualityFilter = new Dictionary<string, object>();
                //examEqualityFilter.Add(ExamRow.Fields.Id.Name, examId);
                //examEqualityFilter.Add(ExamRow.Fields.IsEnabled.Name, 1);
                //var exam = new ExamRepository().List(uow.Connection, new ListRequest
                //{
                //    EqualityFilter = examEqualityFilter
                //}).Entities.FirstOrDefault();
                var exam = uow.Connection.Query<ExamRow>($"select * from hr.Exam where Id={examId} and IsEnabled=1;").FirstOrDefault();
                if (exam != null)
                {
                    foreach (var item in evaluationUsers)
                    {
                        Hangfire.BackgroundJob.Enqueue(() => EmailMangement.Send2(exam.Title,
                            Authorization.Username,
                            //HttpContext.Request.Url.Host + ':' + HttpContext.Request.Url.Port + '/' + $"Evaluation/Evaluation/SelfEvaluation?i={exam.Id}",
                            "http://" + HttpContext.Request.Url.Host + ':' + HttpContext.Request.Url.Port,
                            item.EvaluationEmail,
                            item.EvaluationName));
                    }
                }
            }

            #region 邮件通知考核结果
            //在考核人对被考核人进行完考核之后，要标记一下，已经考核完毕，以便在以后邮件告知被考核人考核结果
            if (request.IsComplete)
            {
                /*
                 * 1. 获取考核关系
                 * 2. 标记对应考核人为已进行考核
                 * 3. 判断所有的考核人是否都已经进行过考核
                 */
                var relation = uow.Connection.Query<UserEvaluationRelationRow>($"select * from hr.UserEvaluationRelation where UserId={userId} and ExamId={examId}").FirstOrDefault();

                if (relation != null)
                {
                    uow.Connection.Execute($"update hr.UserEvaluationToUser set HasEvaluated = 1 where UserId={int.Parse(Authorization.UserId)} and UserEvaluationRelationId={relation.Id};");
                    //发邮件通知
                    //var noEvaluations = uow.Connection.Query<UserToUserViewRow>($"select * from hr.UserToUserView where UserId={userId} and ExamId={examId} and HasEvaluated is null;");
                    //if (noEvaluations == null || noEvaluations.Count() == 0)
                    //{
                    //    var evaluationResult = uow.Connection.Query<EvaluationFinalResultRow>($"select * from hr.EvaluationFinalResult where UserId={userId} and ExamId={examId};").FirstOrDefault();
                    //    if (evaluationResult != null)
                    //    {
                    //        Hangfire.BackgroundJob.Enqueue(() => EmailMangement.Send3(evaluationResult));
                    //    }
                    //}
                }
            }
            #endregion

            return new SaveResponse();
        }
    }
}
