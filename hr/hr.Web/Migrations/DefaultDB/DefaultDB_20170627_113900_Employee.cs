using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170627113900)]
    public class DefaultDB_20170627_113900_Employee : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Schema("hr");

            Create.Table("Department").InSchema("hr")
               .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
               .WithColumn("Name").AsString(50).NotNullable()
               .WithColumn("Remark").AsString(100).Nullable();

            Create.Table("Employee").InSchema("hr")
               .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
               .WithColumn("Name").AsString(50).NotNullable()
               .WithColumn("IdCard").AsString(50).Nullable()
               .WithColumn("Gender").AsString(10).Nullable()
               .WithColumn("BirthDate").AsDate().Nullable()
               .WithColumn("Email").AsString(100).Nullable()
               .WithColumn("DepartmentId").AsInt32().Nullable()
               .ForeignKey("Fk_Employee_DepartmentId", "hr", "Department", "Id").Nullable()
               .WithColumn("Remark").AsString(400).Nullable();

        }
    }
}
