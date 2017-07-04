using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170704100400)]
    public class DefaultDB_20170704_100400_AddDateInToDoList : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("ToDoList").InSchema("hr")
              .AddColumn("StartDate").AsDate().WithDefaultValue(DateTime.Now.ToString("yyyy-MM-dd")).NotNullable()
              .AddColumn("EndDate").AsDate().NotNullable()
              .AddColumn("CreateBy").AsInt32().Nullable()
              .ForeignKey("Fk_ToDoList_CreateBy", "dbo", "Users", "UserId");
        }
    }
}
