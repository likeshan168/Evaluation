using FluentMigrator;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170628103200)]
    public class DefaultDB_20170628_103200_AddIsSelfEvaluationToEvaluationContent : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("EvaluationItem").InSchema("hr")
              .AddColumn("IsSelfEvaluation").AsBoolean().WithDefaultValue(false);
        }
    }
}
