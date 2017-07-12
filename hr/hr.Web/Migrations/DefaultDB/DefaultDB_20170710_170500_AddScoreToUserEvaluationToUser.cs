using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170710170500)]
    public class DefaultDB_20170710_170500_AddScoreToUserEvaluationToUser : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("UserEvaluationToUser").InSchema("hr")
              .AddColumn("HasEvaluated").AsBoolean().Nullable();
        }
    }
}
