
namespace hr.Evaluation.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Evaluation.SelfEvaluationRecord")]
    [BasedOnRow(typeof(Entities.SelfEvaluationRecordRow))]
    public class SelfEvaluationRecordForm
    {
        public Int32 UserId { get; set; }
        public Int32 ExamId { get; set; }
        public DateTime EvaluationDate { get; set; }
        public Boolean IsSelfEvaluated { get; set; }
    }
}