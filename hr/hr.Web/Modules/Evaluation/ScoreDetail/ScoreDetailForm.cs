
namespace hr.Evaluation.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Evaluation.ScoreDetail")]
    [BasedOnRow(typeof(Entities.ScoreDetailRow))]
    public class ScoreDetailForm
    {
        public Int32 EvaluationResultDetailId { get; set; }
        public Int32 UserId { get; set; }
        public Int32 Score { get; set; }
    }
}