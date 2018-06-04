using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20180604085000)]
    public class DefaultDB_20180604_085000_AddDepartmentIdInUser : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Users").InSchema("dbo")
              .AddColumn("DepartmentId").AsInt32().Nullable()
              .ForeignKey("FK_Users_DepartmentId", "hr", "Department", "Id");
        }
    }
}
