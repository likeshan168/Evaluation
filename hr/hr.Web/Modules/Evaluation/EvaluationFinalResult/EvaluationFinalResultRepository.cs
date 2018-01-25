

namespace hr.Evaluation.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.EvaluationFinalResultRow;

    public class EvaluationFinalResultRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
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
            var response = new MyListHandler().Process(connection, request);
            var userIds = connection.Query<UserIds>($"SELECT UserId, EvaluationUserId FROM hr.EvaluationResultView WHERE TotalScore = 0 GROUP BY UserId, EvaluationUserId;");
            response.Entities.ForEach(p =>
            {
                foreach (var item in userIds)
                {
                    //还要判断是否已经进行过评价，但是就是给0分的情况
                    var userViewModel = connection.Query<UserViewModel>(
                            $"SELECT r.UserId,us.Username, u.HasEvaluated FROM hr.UserEvaluationToUser u LEFT JOIN hr.UserEvaluationRelation r ON u.UserEvaluationRelationId = r.Id LEFT JOIN dbo.Users us ON us.UserId = r.UserId WHERE u.UserId = {item.EvaluationUserId} and r.UserId={item.UserId}")
                        .FirstOrDefault();
                    
                    if (userViewModel != null && (item.UserId == p.UserId && !userViewModel.HasEvaluated))
                    {
                        p.TotalScore = 0;
                        p.Grade = "考核还未完";
                    }
                }
            });
            return response;
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}