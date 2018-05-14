using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20180514101100)]
    public class DefaultDB_20180514_101100_SelfEvaluationRecord : AutoReversingMigration
    {
        public override void Up()
        {
            //记录是否已经进行过自我评价
            Create.Table("SelfEvaluationRecord").InSchema("hr")
              .WithColumn("SelfEvaluationRecordId").AsInt64().PrimaryKey().NotNullable().Identity()
              .WithColumn("UserId").AsInt32().NotNullable()
              .ForeignKey("FK_SelfEvaluationRecord_UserId", "dbo", "Users", "UserId")
              .OnDeleteOrUpdate(System.Data.Rule.Cascade)
              .WithColumn("ExamId").AsInt32().NotNullable()
              .ForeignKey("FK_SelfEvaluationRecord_ExamId", "hr", "Exam", "Id")
              .OnDeleteOrUpdate(System.Data.Rule.Cascade)
              .WithColumn("EvaluationDate").AsDateTime()
              .WithColumn("IsSelfEvaluated").AsBoolean();
        }
    }
}
