using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20180604110700)]
    public class DefaultDB_20180604_110700_SelfEvaluationResult : AutoReversingMigration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("SelfEvaluationResult.sql");
        }
    }
}
