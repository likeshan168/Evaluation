
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
        public String UserUsername { get; set; }
        public String Title { get; set; }
        public String Content { get; set; }
    }
}