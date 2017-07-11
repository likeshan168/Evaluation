

namespace hr.Evaluation.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.LeaderShipRow;

    public class LeaderShipRepository
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
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void ValidateRequest()
            {
                base.ValidateRequest();

                if (IsUpdate && Old.ParentUserId != Row.ParentUserId && Row.ParentUserId != null)
                {
                    if (Row.ParentUserId == Row.UserId)
                        throw new ValidationError("Can't move an item under itself!");

                    if (GetParents(Row.ParentUserId.Value).Any(x => x == Row.UserId.Value))
                        throw new ValidationError("Can't move an item under one of its children!");
                }
            }

            private List<int> GetParents(int id)
            {
                var parentById = Connection.List<MyRow>(q => q
                    .Select(fld.UserId)
                    .Select(fld.ParentUserId))
                    .ToDictionary(x => x.UserId, x => x.ParentUserId);

                var visited = new HashSet<int>();
                var result = new List<int>();
                int? parentId;
                while (parentById.TryGetValue(id, out parentId) &&
                    parentId != null &&
                    !visited.Contains(parentId.Value))
                {
                    id = parentId.Value;
                    result.Add(id);
                    visited.Add(id);
                }

                return result;
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}