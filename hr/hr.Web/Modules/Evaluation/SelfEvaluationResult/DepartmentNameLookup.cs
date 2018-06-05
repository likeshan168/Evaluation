using hr.Evaluation.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;

namespace hr.Evaluation.SelfEvaluationResult
{
    [LookupScript("SelfEvaluationResult.DepartmentName")]
    public class DepartmentNameLookup : RowLookupScript<SelfEvaluationResultRow>
    {
        public DepartmentNameLookup()
        {
            IdField = TextField = SelfEvaluationResultRow.Fields.DepartmentName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = SelfEvaluationResultRow.Fields;
            query.Distinct(true)
                .Select(fld.DepartmentName)
                .Where(
                    new Criteria(fld.DepartmentName) != "" &
                    new Criteria(fld.DepartmentName).IsNotNull());
        }
        //保留下面的时候因为启用了Distinct
        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}