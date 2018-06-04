using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20180604094500)]
    public class DefaultDB_20180604_094500_EvaluationFinalResult_Archive : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("EvaluationFinalResult_Archive").InSchema("hr")
              .WithColumn("Id").AsInt64().PrimaryKey().NotNullable().Identity()
              .WithColumn("ExamTitle").AsString(200).NotNullable()
              .WithColumn("UserName").AsString(30).NotNullable()
              .WithColumn("TotalScore").AsInt32().Nullable()
              .WithColumn("Grade").AsString(20).Nullable()
              .WithColumn("DepartmentName").AsString(30).Nullable();
        }
    }
}
