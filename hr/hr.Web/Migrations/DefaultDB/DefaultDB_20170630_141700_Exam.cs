using FluentMigrator;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170630141700)]
    public class DefaultDB_20170630_141700_Exam : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Exam").InSchema("hr")
              .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
              .WithColumn("StartDate").AsDateTime().NotNullable()
              .WithColumn("EndDate").AsDateTime().NotNullable()
              .WithColumn("EvaluationIds").AsString(4000).NotNullable()
              .WithColumn("Remark").AsString(400).Nullable();
        }
    }
}
