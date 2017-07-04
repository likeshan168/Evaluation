
namespace hr.Evaluation.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Evaluation.SecondKpi")]
    [BasedOnRow(typeof(Entities.SecondKpiRow))]
    public class SecondKpiForm
    {
        public Int32 FirstKpiId { get; set; }
        public String Name { get; set; }

        public Int32 OrderNo { get; set; }
        public String Remark { get; set; }
    }
}