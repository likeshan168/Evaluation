
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.SelfEvaluationResult")]
    [BasedOnRow(typeof(Entities.SelfEvaluationResultRow))]
    public class SelfEvaluationResultColumns
    {
        [QuickFilter]
        public string Title { get; set; }
        [QuickFilter]
        public String Username { get; set; }
        public String Content { get; set; }
        public String InputContent { get; set; }
        [QuickFilter]
        public String DepartmentName { get; set; }
    }
}