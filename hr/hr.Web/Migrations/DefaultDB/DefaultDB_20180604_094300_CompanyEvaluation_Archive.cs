using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20180604094300)]
    public class DefaultDB_20180604_094300_CompanyEvaluation_Archive : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("CompanyEvaluation_Archive").InSchema("hr")
              .WithColumn("Id").AsInt64().PrimaryKey().NotNullable().Identity()
              .WithColumn("ExamTitle").AsString(200).NotNullable()
              .WithColumn("UserName").AsString(30).NotNullable()
              .WithColumn("InputContent").AsString(int.MaxValue).Nullable()
              .WithColumn("DepartmentName").AsString(30).Nullable();
        }
    }
}
