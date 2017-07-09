
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.ToDoList")]
    [BasedOnRow(typeof(Entities.ToDoListRow))]
    public class ToDoListColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 Id { get; set; }
        [Width(80)]
        public String UserUsername { get; set; }
        public String Url { get; set; }
        [EditLink, Width(200)]
        public String Title { get; set; }
        
        [Width(300, Min = 300, Max = 500)]
        public String Content { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public String CreateByUsername { get; set; }
       
        public String ExamTitle { get; set; }

        [Width(150, Max = 200, Min = 150)]
        public bool IsComplete { get; set; }
    }
}