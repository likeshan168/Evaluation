using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170710101300)]
    public class DefaultDB_20170710_101300_EnabledInTodoList : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("ToDoList").InSchema("hr")
              .AddColumn("IsEnabled").AsBoolean().Nullable().WithDefaultValue(true);
        }
    }
}
