using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170710171800)]
    public class DefaultDB_20170710_171800_AddEvaluationUserIdToEvaluationResultDetail : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("EvaluationResultDetail").InSchema("hr")
              .AddColumn("EvaluationUserId").AsInt32().Nullable()
              .ForeignKey("FK_EvaluationResultDetail_EvaluationUserId", "dbo", "Users", "UserId");
        }
    }
}
