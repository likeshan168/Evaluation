
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.EvaluationResultDetail")]
    [BasedOnRow(typeof(Entities.EvaluationResultDetailRow))]
    public class EvaluationResultDetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int64 Id { get; set; }
        public Int32 ExamId { get; set; }
        public Int32 EvaluationItemId { get; set; }
        [EditLink]
        public String InputContent { get; set; }
        //public Int32 Score { get; set; }
    }
}