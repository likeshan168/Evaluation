﻿
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.CompanyEvaluation")]
    [BasedOnRow(typeof(Entities.CompanyEvaluationRow))]
    public class CompanyEvaluationColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 CompanyEvaluationId { get; set; }
        [QuickFilter]
        public string Username { get; set; }

        [QuickFilter]
        public String DepartmentName{get;set;}

        [QuickFilter]
        public string Title { get; set; }
        public string EvaluationContent { get; set; }
    }
}