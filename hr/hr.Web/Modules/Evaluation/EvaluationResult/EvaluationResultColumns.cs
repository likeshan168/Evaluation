
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.EvaluationResult")]
    [BasedOnRow(typeof(Entities.EvaluationResultRow))]
    public class EvaluationResultColumns
    {
        [DisplayName("Db.Shared.RecordId")]
        public Int32 Id { get; set; }
        public String UserUsername { get; set; }
        public String ExamTitle { get; set; }
        public Int32 TotalScore { get; set; }
    }
}