using hr.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;

namespace hr.Modules.Common.Helpers
{
    [LookupScript("Common.CustomUser")]
    public class CustomUserLookup:RowLookupScript<UserRow>
    {
        public CustomUserLookup()
        {
            IdField = UserRow.Fields.UserId.PropertyName;
            TextField = UserRow.Fields.Username.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = UserRow.Fields;
            query.Distinct(true)
                .Select(fld.UserId, fld.Username)
                .Where(
                    new Criteria(fld.Username) != "admin" &
                    new Criteria(fld.Username).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}