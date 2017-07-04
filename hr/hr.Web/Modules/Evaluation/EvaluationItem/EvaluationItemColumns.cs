
namespace hr.Evaluation.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Evaluation.EvaluationItem")]
    [BasedOnRow(typeof(Entities.EvaluationItemRow))]
    public class EvaluationItemColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId")]
        //public Int32 Id { get; set; }
        public Int32 OrderNo { get; set; }
        [QuickFilter]
        [Width(100, Max = 120, Min = 100)]
        public String FirstKpiName { get; set; }
        [Width(100, Max = 120, Min = 100)]
        [QuickFilter]
        public String SecondKpiName { get; set; }
        [EditLink, Width(500, Max = 600, Min = 400)]
        public String Content { get; set; }
        public ContentType ContentType { get; set; }
        public Int32 Score { get; set; }
        [EditLink, Width(500, Max = 600, Min = 400)]
        public String Mark { get; set; }
        [Width(80, Max = 100, Min = 80)]
        [QuickFilter]
        public Boolean IsEnabled { get; set; }
        [Width(100, Max = 120, Min = 80)]
        [QuickFilter]
        public Boolean IsSelfEvaluation { get; set; }
        public String Remark { get; set; }
    }
}