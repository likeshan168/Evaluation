
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.ScoreDetail")]
    [BasedOnRow(typeof(Entities.ScoreDetailRow))]
    public class ScoreDetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 EvaluationResultDetailId { get; set; }
        public Int32 UserId { get; set; }
        public Int32 Score { get; set; }
    }
}