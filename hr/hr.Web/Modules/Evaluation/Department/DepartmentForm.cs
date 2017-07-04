
namespace hr.Evaluation.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Evaluation.Department")]
    [BasedOnRow(typeof(Entities.DepartmentRow))]
    public class DepartmentForm
    {
        public String Name { get; set; }
        public String Remark { get; set; }
    }
}