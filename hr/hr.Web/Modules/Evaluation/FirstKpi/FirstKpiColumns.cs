
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.FirstKpi")]
    [BasedOnRow(typeof(Entities.FirstKpiRow))]
    public class FirstKpiColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId")]
        //public Int32 Id { get; set; }
        public Int32 OrderNo { get; set; }
       [EditLink]
        public String Name { get; set; }
        public String Remark { get; set; }
    }
}