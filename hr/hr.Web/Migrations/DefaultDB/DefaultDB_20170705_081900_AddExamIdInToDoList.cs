using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170705081900)]
    public class DefaultDB_20170705_081900_AddExamIdInToDoList : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("ToDoList").InSchema("hr")
              .AddColumn("ExamId").AsInt32().Nullable()
              .ForeignKey("FK_ToDoList_ExamId", "hr", "Exam", "Id");
        }
    }
}
