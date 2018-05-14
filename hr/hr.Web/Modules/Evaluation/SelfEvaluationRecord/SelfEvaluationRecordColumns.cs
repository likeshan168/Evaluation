
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.SelfEvaluationRecord")]
    [BasedOnRow(typeof(Entities.SelfEvaluationRecordRow))]
    public class SelfEvaluationRecordColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 SelfEvaluationRecordId { get; set; }
        public String Username { get; set; }
        public String ExamTitle { get; set; }
        public DateTime EvaluationDate { get; set; }
        public Boolean IsSelfEvaluated { get; set; }
    }
}