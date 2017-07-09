

namespace hr.Evaluation.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.UserEvaluationRelationRow;

    public class UserEvaluationRelationRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            // get the exam info
            var exam = new ExamRepository().Retrieve(uow.Connection, new RetrieveRequest()
            {
                EntityId = request.Entity.ExamId
            });
            //add self evaluation to todo list
            var todoRep = new ToDoListRepository();
            todoRep.Create(uow, new SaveRequest<Entities.ToDoListRow>()
            {
                Entity = new Entities.ToDoListRow()
                {
                    UserId = request.Entity.UserId,
                    Title = Constants.Evaluation.Title,
                    Content = Constants.Evaluation.Content,
                    StartDate = DateTime.Now,
                    EndDate = exam.Entity.EndDate,
                    CreateBy = Int32.Parse(Authorization.UserId),
                    Url = $"Evaluation/Evaluation/SelfEvaluation?i={exam.Entity.Id}",
                    ExamId = exam.Entity.Id
                }
            });
            var itemIds = exam.Entity.EvaluationIds.Split(',');
            var erdRep = new EvaluationResultDetailRepository();
            foreach (var id in itemIds)
            {
                erdRep.Create(uow, new SaveRequest<Entities.EvaluationResultDetailRow>()
                {
                    Entity = new Entities.EvaluationResultDetailRow()
                    {
                        ExamId = exam.Entity.Id,
                        UserId = request.Entity.UserId,
                        EvaluationItemId = int.Parse(id)
                    }
                });
            }

            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            // get the exam info
            var exam = new ExamRepository().Retrieve(uow.Connection, new RetrieveRequest()
            {
                EntityId = request.Entity.ExamId
            });
            // check if the exam is changed or just change the relationship of users
            if (!uow.Connection.Exists<MyRow>(MyRow.Fields.Id == request.Entity.Id.Value && MyRow.Fields.ExamId == request.Entity.ExamId.Value))
            {
                var todoRep = new ToDoListRepository();
                todoRep.Create(uow, new SaveRequest<Entities.ToDoListRow>()
                {
                    Entity = new Entities.ToDoListRow()
                    {
                        UserId = request.Entity.UserId,
                        Title = Constants.Evaluation.Title,
                        Content = Constants.Evaluation.Content,
                        StartDate = DateTime.Now,
                        EndDate = exam.Entity.EndDate,
                        CreateBy = Int32.Parse(Authorization.UserId),
                        Url = $"Evaluation/Evaluation/SelfEvaluation?i={exam.Entity.Id}",
                        ExamId = exam.Entity.Id
                    }
                });
                //添加考核结果详情
                var itemIds = exam.Entity.EvaluationIds.Split(',');
                var erdRep = new EvaluationResultDetailRepository();
                foreach (var id in itemIds)
                {
                    erdRep.Create(uow, new SaveRequest<Entities.EvaluationResultDetailRow>()
                    {
                        Entity = new Entities.EvaluationResultDetailRow()
                        {
                            ExamId = exam.Entity.Id,
                            UserId = request.Entity.UserId,
                            EvaluationItemId = int.Parse(id)
                        }
                    });
                }
            }
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}