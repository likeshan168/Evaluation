using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20180604094800)]
    public class DefaultDB_20180604_094800_EvaluationFinalResultDetail_Archive : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("EvaluationFinalResultDetail_Archive").InSchema("hr")
              .WithColumn("Id").AsInt64().PrimaryKey().NotNullable().Identity()
              .WithColumn("ExamTitle").AsString(200).NotNullable()
              .WithColumn("UserName").AsString(30).NotNullable()
              .WithColumn("Score").AsInt32().Nullable()
              .WithColumn("EvaluationUserName").AsString(30).Nullable()
              .WithColumn("DepartmentName").AsString(30).Nullable();
        }
    }
}
