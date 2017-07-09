using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170705161000)]
    public class DefaultDB_20170705_161000_ScoreDetail : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("ScoreDetail").InSchema("hr")
              .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
              .WithColumn("EvaluationResultDetailId").AsInt32().Nullable().WithColumnDescription("评价结果的ID")
              .WithColumn("UserId").AsInt32().Nullable().WithColumnDescription("评价人")
              .WithColumn("Score").AsInt32().Nullable().WithColumnDescription("分数");
              //.ForeignKey("FK_EvaluationResultDetail_UserId", "dbo", "Users", "UserId");
        }
    }
}
