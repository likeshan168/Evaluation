using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20180625092500)]
    public class DefaultDB_20180625_092500_Exam_Archive : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Exam_Archive").InSchema("hr")
              .WithColumn("Id").AsInt64().PrimaryKey().NotNullable().Identity()
              .WithColumn("ExamId").AsInt32().NotNullable()
              .WithColumn("ExamTitle").AsString(200).NotNullable()
              .WithColumn("FirstKpiName").AsString(200).NotNullable()
              .WithColumn("SecondKpiName").AsString(200).NotNullable()
              .WithColumn("Content").AsString(4000).Nullable()
              .WithColumn("ContentType").AsInt32().Nullable()
              .WithColumn("Score").AsInt32().Nullable()
              .WithColumn("Mark").AsString(400).Nullable()
              .WithColumn("Remark").AsString(1000).Nullable()
              .WithColumn("EvaluationType").AsInt32().NotNullable();
            //Create.Table("Evaluation1_Archive").InSchema("hr")
            //  .WithColumn("Id").AsInt64().PrimaryKey().NotNullable().Identity()
            //  .WithColumn("ExamId").AsInt32().NotNullable()
            //  .WithColumn("ExamTitle").AsString(200).NotNullable()
            //  .WithColumn("FirstKpiName").AsString(200).NotNullable()
            //  .WithColumn("SecondKpiName").AsString(200).NotNullable()
            //  .WithColumn("Content").AsString(4000).Nullable()
            //  .WithColumn("ContentType").AsInt32().Nullable()
            //  .WithColumn("Score").AsInt32().Nullable()
            //  .WithColumn("Mark").AsString(400).Nullable()
            //  .WithColumn("Remark").AsString(1000).Nullable();
            //Create.Table("Evaluation2_Archive").InSchema("hr")
            //  .WithColumn("Id").AsInt64().PrimaryKey().NotNullable().Identity()
            //  .WithColumn("ExamId").AsInt32().NotNullable()
            //  .WithColumn("ExamTitle").AsString(200).NotNullable()
            //  .WithColumn("FirstKpiName").AsString(200).NotNullable()
            //  .WithColumn("SecondKpiName").AsString(200).NotNullable()
            //  .WithColumn("Content").AsString(4000).Nullable()
            //  .WithColumn("ContentType").AsInt32().Nullable()
            //  .WithColumn("Score").AsInt32().Nullable()
            //  .WithColumn("Mark").AsString(400).Nullable()
            //  .WithColumn("Remark").AsString(1000).Nullable();
        }
    }
}
