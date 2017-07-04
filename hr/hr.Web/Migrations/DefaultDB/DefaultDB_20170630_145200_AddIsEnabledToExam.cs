using FluentMigrator;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170630145200)]
    public class DefaultDB_20170630_145200_AddIsEnabledToExam : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Exam").InSchema("hr")
              .AddColumn("IsEnabled").AsBoolean().WithDefaultValue(false);
        }
    }
}
