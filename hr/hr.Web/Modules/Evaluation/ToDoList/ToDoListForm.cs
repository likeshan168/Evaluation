
namespace hr.Evaluation.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Evaluation.ToDoList")]
    [BasedOnRow(typeof(Entities.ToDoListRow))]
    public class ToDoListForm
    {
        public String UserId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public String Title { get; set; }
        public String Content { get; set; }
        public Int32 ExamId { get; set; }
        public Int32 CreateBy { get; set; }
        public bool IsEnabled { get; set; }
    }
}