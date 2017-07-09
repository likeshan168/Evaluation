
namespace hr.Evaluation.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Evaluation.EvaluationResult")]
    [BasedOnRow(typeof(Entities.EvaluationResultRow))]
    public class EvaluationResultForm
    {
        public Int32 UserId { get; set; }
        public Int32 ExamId { get; set; }
        public Int32 TotalScore { get; set; }
    }
}