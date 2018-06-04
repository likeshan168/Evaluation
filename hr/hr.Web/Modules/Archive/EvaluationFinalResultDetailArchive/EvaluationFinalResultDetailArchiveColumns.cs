
namespace hr.Archive.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Archive.EvaluationFinalResultDetailArchive")]
    [BasedOnRow(typeof(Entities.EvaluationFinalResultDetailArchiveRow))]
    public class EvaluationFinalResultDetailArchiveColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [QuickFilter]
        public String ExamTitle { get; set; }
        [QuickFilter]
        public String UserName { get; set; }
        public Int32 Score { get; set; }
        [QuickFilter]
        public String EvaluationUserName { get; set; }
        [QuickFilter]
        public String DepartmentName { get; set; }
    }
}