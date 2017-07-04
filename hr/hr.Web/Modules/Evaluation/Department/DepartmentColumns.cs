
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.Department")]
    [BasedOnRow(typeof(Entities.DepartmentRow))]
    public class DepartmentColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, SortOrder(1, false)]
        public Int32 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Remark { get; set; }
    }
}