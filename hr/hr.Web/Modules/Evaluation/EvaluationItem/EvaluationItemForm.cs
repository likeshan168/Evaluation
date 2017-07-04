
namespace hr.Evaluation.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Evaluation.EvaluationItem")]
    [BasedOnRow(typeof(Entities.EvaluationItemRow))]
    public class EvaluationItemForm
    {
        public Int32 FirstKpiId { get; set; }
        public Int32 SecondKpiId { get; set; }
        public String Content { get; set; }
        public ContentType ContentType { get; set; }
        public Int32 Score { get; set; }
        public String Mark { get; set; }
        public Boolean IsEnabled { get; set; }
        public Boolean IsSelfEvaluation { get; set; }
        public Int32 OrderNo { get; set; }
        public String Remark { get; set; }
    }
}