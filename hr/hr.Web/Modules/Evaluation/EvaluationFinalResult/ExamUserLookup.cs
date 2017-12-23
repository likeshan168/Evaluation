using hr.Evaluation.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;

namespace hr.Evaluation.EvaluationFinalResult
{
    [LookupScript("EvaluationFinalResult.ExamUser")]
    public class ExamUserLookup : RowLookupScript<EvaluationFinalResultRow>
    {
        public ExamUserLookup()
        {
            IdField = TextField = EvaluationFinalResultRow.Fields.UserName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = EvaluationFinalResultRow.Fields;
            query.Distinct(true)
                .Select(fld.UserName)
                .Where(
                    new Criteria(fld.UserName) != "" &
                    new Criteria(fld.UserName).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}