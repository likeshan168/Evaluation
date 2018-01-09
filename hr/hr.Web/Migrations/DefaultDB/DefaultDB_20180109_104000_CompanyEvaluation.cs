using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20180109104000)]
    public class DefaultDB_20180109_104000_CompanyEvaluation : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("CompanyEvaluation").InSchema("hr")
              //.WithColumn("Id").AsInt32().PrimaryKey().NotNullable().Identity()
              .WithColumn("CompanyEvaluationId").AsInt64().PrimaryKey().NotNullable().Identity()
              .WithColumn("UserId").AsInt32().NotNullable()
              .ForeignKey("FK_CompanyEvaluation_UserId", "dbo", "Users", "UserId")
              .OnDeleteOrUpdate(System.Data.Rule.Cascade)
              .WithColumn("EvaluationContent").AsString(int.MaxValue).NotNullable()
              .WithColumn("ExamId").AsInt32().NotNullable()
              .ForeignKey("FK_CompanyEvaluation_ExamId","hr","Exam","Id")
              .OnDeleteOrUpdate(System.Data.Rule.Cascade);
        }
    }
}
