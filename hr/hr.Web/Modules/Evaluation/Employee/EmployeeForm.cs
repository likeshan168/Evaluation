
namespace hr.Evaluation.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Evaluation.Employee")]
    [BasedOnRow(typeof(Entities.EmployeeRow))]
    public class EmployeeForm
    {
        public String Name { get; set; }
        public String IdCard { get; set; }
        public String Gender { get; set; }
        public DateTime BirthDate { get; set; }
        public String Email { get; set; }
        public Int32 DepartmentId { get; set; }
        public String Remark { get; set; }
    }
}