
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.SecondKpi")]
    [BasedOnRow(typeof(Entities.SecondKpiRow))]
    public class SecondKpiColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        public Int32 OrderNo { get; set; }
        public String FirstKpiName { get; set; }

        [EditLink]
        public String Name { get; set; }
        public String Remark { get; set; }

    }
}