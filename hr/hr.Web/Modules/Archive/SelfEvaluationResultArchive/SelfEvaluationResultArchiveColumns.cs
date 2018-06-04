
namespace hr.Archive.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Archive.SelfEvaluationResultArchive")]
    [BasedOnRow(typeof(Entities.SelfEvaluationResultArchiveRow))]
    public class SelfEvaluationResultArchiveColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [QuickFilter]
        public String ExamTitle { get; set; }
        [QuickFilter]
        public String UserName { get; set; }
        public String ExamContent { get; set; }
        public String InputContent { get; set; }
        [QuickFilter]
        public String DepartmentName { get; set; }
    }
}