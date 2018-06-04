
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.EvaluationFinalResult")]
    [BasedOnRow(typeof(Entities.EvaluationFinalResultRow))]
    public class EvaluationFinalResultColumns
    {
        //public Int64 Id { get; set; }
        //public Int32 UserId { get; set; }
        //public Int32 ExamId { get; set; }
        //[EditLink]
        [QuickFilter]
        public String Title { get; set; }
        [QuickFilter]
        public String UserName { get; set; }
        [QuickFilter]
        public String DepartmentName { get; set; }
        public Decimal TotalScore { get; set; }

        [QuickFilter]
        public String Grade { get; set; }
    }
}