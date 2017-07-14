
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.EvaluationResultView")]
    [BasedOnRow(typeof(Entities.EvaluationResultViewRow))]
    public class EvaluationResultViewColumns
    {
        //public Int64 Id { get; set; }
        //public Int32 UserId { get; set; }
        //[EditLink]
        public String Username { get; set; }
        //public Int32 ParentUserId { get; set; }
        //public Int32 ExamId { get; set; }
        [Width(300)]
        public String Title { get; set; }
        [Width(200)]
        public String EvaluationEmail { get; set; }
        public Decimal TotalScore { get; set; }
        //public Int32 EvaluationUserId { get; set; }
        public String EvaluationUser { get; set; }
    }
}