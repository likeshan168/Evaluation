using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170705153800)]
    public class DefaultDB_20170705_153800_AddUserIdToEvaluationResultDetail : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("EvaluationResultDetail").InSchema("hr")
              .AddColumn("UserId").AsInt32().Nullable()
              .ForeignKey("FK_EvaluationResultDetail_UserId", "dbo", "Users", "UserId");
        }
    }
}
