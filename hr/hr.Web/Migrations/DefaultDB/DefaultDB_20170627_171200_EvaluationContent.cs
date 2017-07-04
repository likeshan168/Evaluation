using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170627171200)]
    public class DefaultDB_20170627_171200_EvaluationContent : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("FirstKPI").InSchema("hr")
               .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
               .WithColumn("Name").AsString(50).NotNullable()
               .WithColumn("Remark").AsString(100).Nullable();

            Create.Table("SecondKPI").InSchema("hr")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(50).NotNullable()
                .WithColumn("Remark").AsString(100).Nullable()
                .WithColumn("FirstKpiId").AsInt32().Nullable()
                .ForeignKey("Fk_FirstKPI_FristKPIId", "hr", "FirstKPI", "Id").Nullable();

            Create.Table("EvaluationItem").InSchema("hr")
               .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
               .WithColumn("Content").AsString(400).NotNullable()
               .WithColumn("ContentType").AsInt32().NotNullable()
               .WithColumn("Score").AsInt32().NotNullable()
               .WithColumn("Mark").AsString(int.MaxValue).Nullable()
               .WithColumn("IsEnabled").AsBoolean().WithDefaultValue(false)
               .WithColumn("Remark").AsString(400).Nullable()
               .WithColumn("SecondKpiId").AsInt32().Nullable()
               .ForeignKey("Fk_EvaluationItem_SecondKPIId", "hr", "SecondKPI", "Id").Nullable();
        }
    }
}
