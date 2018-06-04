using hr.Evaluation.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;

namespace hr.Evaluation.EvaluationFinalResult
{
    [LookupScript("EvaluationFinalResult.DepartmentName")]
    public class DepartmentNameLookup : RowLookupScript<EvaluationFinalResultRow>
    {
        public DepartmentNameLookup()
        {
            IdField = TextField = EvaluationFinalResultRow.Fields.DepartmentName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = EvaluationFinalResultRow.Fields;
            query.Distinct(true)
                .Select(fld.DepartmentName)
                .Where(
                    new Criteria(fld.DepartmentName) != "" &
                    new Criteria(fld.DepartmentName).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}