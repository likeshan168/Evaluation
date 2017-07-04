using FluentMigrator;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170703175900)]
    public class DefaultDB_20170703_175900_UserEvaluationToUser : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("UserEvaluationToUser").InSchema("hr")
              .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
              .WithColumn("UserEvaluationRelationId").AsInt32().NotNullable()
              .ForeignKey("Fk_UserEvaluationToUser_UserEvaluationRelationId", "hr", "UserEvaluationRelation", "Id")
              .WithColumn("UserId").AsInt32().NotNullable()
              .ForeignKey("Fk_UserEvaluationToUser_UserId", "dbo", "Users", "UserId");

            Delete.Column("EvaluationUserIds").FromTable("UserEvaluationRelation").InSchema("hr");

        }
    }
}
