using hr.Evaluation.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;

namespace hr.Evaluation.EvaluationFinalResult
{
    [LookupScript("EvaluationFinalResult.ExamTitle")]
    public class ExamTitleLookup: RowLookupScript<EvaluationFinalResultRow>
    {
        public ExamTitleLookup()
        {
            IdField = TextField = EvaluationFinalResultRow.Fields.Title.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = EvaluationFinalResultRow.Fields;
            query.Distinct(true)
                .Select(fld.Title)
                .Where(
                    new Criteria(fld.Title).IsNotNull());
        }
    }
}