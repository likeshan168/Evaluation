using FluentMigrator;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170704080800)]
    public class DefaultDB_20170704_080800_ToDoList : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("ToDoList").InSchema("hr")
              .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
              .WithColumn("UserId").AsInt32().NotNullable()
              .ForeignKey("Fk_ToDoList_UserId", "dbo", "Users", "UserId")
              .WithColumn("Title").AsString(400).NotNullable()
              .WithColumn("Content").AsString(int.MaxValue).NotNullable();
        }
    }
}
