using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170710133900)]
    public class DefaultDB_20170710_133900_LeaderShip : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("LeaderShip").InSchema("hr")
              //.WithColumn("Id").AsInt32().PrimaryKey().NotNullable().Identity()
              .WithColumn("UserId").AsInt32().NotNullable().PrimaryKey()
              .ForeignKey("FK_LeaderShip_UserId", "dbo", "Users", "UserId")
              .WithColumn("ParentUserId").AsInt32().Nullable();
        }
    }
}
