
namespace hr.Evaluation.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Evaluation.Exam")]
    [BasedOnRow(typeof(Entities.ExamRow))]
    public class ExamForm
    {
        public String Title { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public String EvaluationIds { get; set; }
        public bool IsEnabled { get; set; }
        public String Remark { get; set; }
    }
}