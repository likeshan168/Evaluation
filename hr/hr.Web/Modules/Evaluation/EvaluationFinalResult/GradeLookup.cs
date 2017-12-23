using hr.Evaluation.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;

namespace hr.Evaluation.EvaluationFinalResult
{
    [LookupScript("EvaluationFinalResult.Grade")]
    public class GradeLookup : RowLookupScript<EvaluationFinalResultRow>
    {
        public GradeLookup()
        {
            IdField = TextField = EvaluationFinalResultRow.Fields.Grade.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = EvaluationFinalResultRow.Fields;
            query.Distinct(true)
                .Select(fld.Grade)
                .Where(new Criteria(fld.Grade) != "" &
                    new Criteria(fld.Grade).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}