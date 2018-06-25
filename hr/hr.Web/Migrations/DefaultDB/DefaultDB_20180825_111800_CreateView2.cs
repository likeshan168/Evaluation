using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20180825111800)]
    public class DefaultDB_20180825_111800_CreateView2 : AutoReversingMigration
    {
        public override void Up()
        {
            //因为有更新，需要从新执行一遍
            Execute.EmbeddedScript("UserToUserView.sql");
            Execute.EmbeddedScript("EvaluationResultView.sql");
            Execute.EmbeddedScript("OtherEvaluationResult.sql");
            Execute.EmbeddedScript("LeaderEvaluationResult.sql");
            Execute.EmbeddedScript("EvaluationFinalResult1.sql");
            Execute.EmbeddedScript("EvaluationFinalResult.sql");
        }
    }
}
