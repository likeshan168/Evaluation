using FluentMigrator;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170703213600)]
    public class DefaultDB_20170703_213600_EvaluationResult : AutoReversingMigration
    {
        public override void Up()
        {
            //TODO: drop table EvaluationResult which is not used
            Create.Table("EvaluationResult").InSchema("hr")
              .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
              .WithColumn("UserId").AsInt32().NotNullable()
              .ForeignKey("Fk_EvaluationResult_UserId", "dbo", "Users", "UserId")
              .WithColumn("ExamId").AsInt32().NotNullable()
              .ForeignKey("Fk_EvaluationResult_ExamId", "hr", "Exam", "Id")
              .WithColumn("TotalScore").AsInt32().Nullable();

            Create.Table("EvaluationResultDetail").InSchema("hr")
                .WithColumn("Id").AsInt64().PrimaryKey().Identity().NotNullable()
                .WithColumn("ExamId").AsInt32().NotNullable()
                .WithColumn("EvaluationItemId").AsInt32().Nullable()
                .ForeignKey("Fk_EvaluationResultDetail_EvaluationItemId", "hr", "EvaluationItem", "Id")
                .WithColumn("InputContent").AsString(int.MaxValue).Nullable()
                .WithColumn("Score").AsInt32().Nullable();//记录每一项考核的分数（不是给被考核人看的，是给管理员和考核人看的）
        }
    }
}
