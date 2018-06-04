using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20180604093600)]
    public class DefaultDB_20180604_093600_SelfEvaluationResult_Archive : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("SelfEvaluationResult_Archive").InSchema("hr")
              .WithColumn("Id").AsInt64().PrimaryKey().NotNullable().Identity()
              .WithColumn("ExamTitle").AsString(200).NotNullable()
              .WithColumn("UserName").AsString(30).NotNullable()
              .WithColumn("ExamContent").AsString(4000).NotNullable()
              .WithColumn("InputContent").AsString(int.MaxValue).Nullable()
              .WithColumn("DepartmentName").AsString(30).Nullable();
        }
    }
}
