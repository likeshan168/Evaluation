
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
        public String UserUsername { get; set; }
        [EditLink]
        public String Title { get; set; }
        public String Content { get; set; }
        [Width(150, Max = 200, Min = 150)]
        public bool IsComplete { get; set; }
    }
}