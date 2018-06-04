
namespace hr.Archive.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Archive.EvaluationFinalResultArchive")]
    [BasedOnRow(typeof(Entities.EvaluationFinalResultArchiveRow))]
    public class EvaluationFinalResultArchiveColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [QuickFilter]
        public String ExamTitle { get; set; }
        [QuickFilter]
        public String UserName { get; set; }
        public Int32 TotalScore { get; set; }
        [QuickFilter]
        public String Grade { get; set; }
        [QuickFilter]
        public String DepartmentName { get; set; }
    }
}