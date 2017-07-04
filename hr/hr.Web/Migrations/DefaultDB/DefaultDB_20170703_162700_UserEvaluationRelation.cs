using FluentMigrator;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170703162700)]
    public class DefaultDB_20170703_162700_UserEvaluationRelation : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("UserEvaluationRelation").InSchema("hr")
              .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
              .WithColumn("UserId").AsInt32().NotNullable()
              .ForeignKey("Fk_UserEvaluationRelation_UserId", "dbo", "Users", "UserId")
              .WithColumn("EvaluationUserIds").AsString(400).NotNullable()
              .WithColumn("ExamId").AsInt32().NotNullable()
              .ForeignKey("Fk_UserEvaluationRelation_ExamId", "hr", "Exam", "Id")
              .WithColumn("Remark").AsString(400).Nullable();
        }
    }
}
