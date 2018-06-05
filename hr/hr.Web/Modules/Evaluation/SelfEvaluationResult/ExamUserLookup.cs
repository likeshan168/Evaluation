using hr.Evaluation.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;

namespace hr.Evaluation.SelfEvaluationResult
{
    [LookupScript("SelfEvaluationResult.ExamUser")]
    public class ExamUserLookup : RowLookupScript<SelfEvaluationResultRow>
    {
        public ExamUserLookup()
        {
            IdField = TextField = SelfEvaluationResultRow.Fields.Username.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = SelfEvaluationResultRow.Fields;
            query.Distinct(true)
                .Select(fld.Username)
                .Where(
                    new Criteria(fld.Username) != "" &
                    new Criteria(fld.Username).IsNotNull());
        }
        //保留下面的时候因为启用了Distinct
        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}