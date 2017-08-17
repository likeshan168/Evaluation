using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170817170100)]
    public class DefaultDB_20170817_170100_CreateView2 : AutoReversingMigration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("UserToUserView.sql");
            Execute.EmbeddedScript("EvaluationResultView.sql");
            Execute.EmbeddedScript("OtherEvaluationResult.sql");
            Execute.EmbeddedScript("LeaderEvaluationResult.sql");
            Execute.EmbeddedScript("EvaluationFinalResult1.sql");
            Execute.EmbeddedScript("EvaluationFinalResult.sql");
        }
    }
}
