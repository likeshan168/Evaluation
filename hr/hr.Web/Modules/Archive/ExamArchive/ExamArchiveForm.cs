
namespace hr.Archive.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Archive.ExamArchive")]
    [BasedOnRow(typeof(Entities.ExamArchiveRow))]
    public class ExamArchiveForm
    {
        public Int32 ExamId { get; set; }
        public String ExamTitle { get; set; }
        public String FirstKpiName { get; set; }
        public String SecondKpiName { get; set; }
        public String Content { get; set; }
        public Int32 ContentType { get; set; }
        public Int32 Score { get; set; }
        public String Mark { get; set; }
        public String Remark { get; set; }
        public Int32 EvaluationType { get; set; }
    }
}