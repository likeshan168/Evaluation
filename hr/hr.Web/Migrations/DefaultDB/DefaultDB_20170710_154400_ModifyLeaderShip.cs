using FluentMigrator;
using System;

namespace hr.Migrations.DefaultDB
{
    [Migration(20170710154400)]
    public class DefaultDB_20170710_154400_ModifyLeaderShip : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("LeaderShip").InSchema("hr")
              .AlterColumn("ParentUserId").AsInt32().Nullable()
              .ForeignKey("FK_LeaderShip_ParentUserId", "dbo", "Users", "UserId");
        }
    }
}
