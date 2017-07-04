
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.Employee")]
    [BasedOnRow(typeof(Entities.EmployeeRow))]
    public class EmployeeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String IdCard { get; set; }
        public String Gender { get; set; }
        public DateTime BirthDate { get; set; }
        public String Email { get; set; }
        public String DepartmentName { get; set; }
        public String Remark { get; set; }
    }
}