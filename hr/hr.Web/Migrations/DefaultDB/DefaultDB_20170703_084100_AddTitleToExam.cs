using FluentMigrator;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170703_084100)]
    public class DefaultDB_20170703_084100_AddTitleToExam : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Exam").InSchema("hr")
              .AddColumn("Title").AsString(400).NotNullable();
        }
    }
}
