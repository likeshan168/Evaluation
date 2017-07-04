using FluentMigrator;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170627173600)]
    public class DefaultDB_20170627_173600_AddFirstKPIToEvaluationContent : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("EvaluationItem").InSchema("hr")
              .AddColumn("FirstKpiId").AsInt32().Nullable()
              .ForeignKey("Fk_EvaluationItem_FirstKPIId", "hr", "FirstKPI", "Id");
        }
    }
}
