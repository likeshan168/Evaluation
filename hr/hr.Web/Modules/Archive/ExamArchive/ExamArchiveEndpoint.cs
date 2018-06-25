
namespace hr.Archive.Endpoints
{
    using hr.Archive.Entities;
    using hr.Evaluation;
    using hr.Evaluation.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Text;
    using System.Web.Mvc;
    using MyRepository = Repositories.ExamArchiveRepository;
    using MyRow = Entities.ExamArchiveRow;

    [RoutePrefix("Services/Archive/ExamArchive"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ExamArchiveController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
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

        public ListResponse<ArchiveExam> GetExamArchiveList(IDbConnection connection, ListRequest request)
        {
            var listResponse = new ListResponse<ArchiveExam>();
            var examRows = connection.Query<ArchiveExam>($"select distinct ExamId, ExamTitle  from [hr].[Exam_Archive] ");
            listResponse.Entities = examRows.ToList();
            return listResponse;
        }

        public IEnumerable<ExamArchiveRow> GetSelfEvaluation(EvaluationItemRequest request)
        {
            using (var conn = SqlConnections.NewByKey("Default"))
                return conn.Query<MyRow>($"select * from [hr].[Exam_Archive] where ExamId={request.ExamId} and EvaluationType= 1;");
        }

        [AllowAnonymous]
        /// <summary>
        /// get the evluation items except self evaluation items
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ExamArchiveRow> GetEvaluation1(EvaluationItemRequest request)
        {
            using (var conn = SqlConnections.NewByKey("Default"))
            {
                return conn.Query<MyRow>($"select * from [hr].[Exam_Archive] where ExamId={request.ExamId} and EvaluationType= 2;");
            }
        }

        [AllowAnonymous]
        public IEnumerable<ExamArchiveRow> GetEvaluation2(EvaluationItemRequest request)
        {
            using (var conn = SqlConnections.NewByKey("Default"))
            {
                return conn.Query<MyRow>($"select * from [hr].[Exam_Archive] where ExamId={request.ExamId} and EvaluationType= 3;");
            }
        }
    }

}

