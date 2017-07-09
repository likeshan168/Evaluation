
namespace hr.Evaluation.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Evaluation.EvaluationResultDetail")]
    [BasedOnRow(typeof(Entities.EvaluationResultDetailRow))]
    public class EvaluationResultDetailForm
    {
        public Int32 ExamId { get; set; }
        public Int32 EvaluationItemId { get; set; }
        public String InputContent { get; set; }
        //public Int32 Score { get; set; }
    }
}