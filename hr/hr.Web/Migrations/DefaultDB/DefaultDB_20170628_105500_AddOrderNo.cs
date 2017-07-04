using FluentMigrator;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170628105500)]
    public class DefaultDB_20170628_105500_AddOrderNo : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("FirstKPI").InSchema("hr")
              .AddColumn("OrderNo").AsInt32().NotNullable().WithDefaultValue(1);
            Alter.Table("SecondKPI").InSchema("hr")
              .AddColumn("OrderNo").AsInt32().NotNullable().WithDefaultValue(1);
            Alter.Table("EvaluationItem").InSchema("hr")
              .AddColumn("OrderNo").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
}
