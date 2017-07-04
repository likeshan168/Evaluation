
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.Exam")]
    [BasedOnRow(typeof(Entities.ExamRow))]
    public class ExamColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 Id { get; set; }
        [EditLink]
        public String Title { get; set; }
        [Width(100, Max = 120, Min = 100)]
        public DateTime StartDate { get; set; }
        [Width(100, Max = 120, Min = 100)]
        public DateTime EndDate { get; set; }
        [EditLink, Width(500, Max = 600, Min = 400)]
        public String EvaluationIds { get; set; }
        [Width(100, Max = 120, Min = 80)]
        [QuickFilter]
        public bool IsEnabled { get; set; }

        public String Remark { get; set; }
    }
}