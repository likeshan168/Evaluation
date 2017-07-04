
namespace hr.Evaluation.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Evaluation.FirstKpi")]
    [BasedOnRow(typeof(Entities.FirstKpiRow))]
    public class FirstKpiForm
    {
        public Int32 OrderNo { get; set; }

        public String Name { get; set; }
        public String Remark { get; set; }
    }
}