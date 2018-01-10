
namespace hr.Evaluation.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[LeaderShip]"), DisplayName("Leader Ship"), InstanceName("Leader Ship"), TwoLevelCached]
    [ReadPermission(PermissionKeys.LeaderShipRow.View)]
    [ModifyPermission(PermissionKeys.LeaderShipRow.Modify)]
    public sealed class LeaderShipRow : Row, IIdRow
    {
        //[DisplayName("Id"), Identity]
        //public Int32? Id
        //{
        //    get { return Fields.Id[this]; }
        //    set { Fields.Id[this] = value; }
        //}

        [PrimaryKey, DisplayName("User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        [LookupEditor(typeof(Administration.Entities.UserRow))]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Parent User Id"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("pUser"), TextualField("ParentUsername")]
        [LookupEditor(typeof(Administration.Entities.UserRow), InplaceAdd = true)]
        public Int32? ParentUserId
        {
            get { return Fields.ParentUserId[this]; }
            set { Fields.ParentUserId[this] = value; }
        }

        [DisplayName("User Username"), Expression("jUser.[Username]"), QuickSearch]
        public String UserUsername
        {
            get { return Fields.UserUsername[this]; }
            set { Fields.UserUsername[this] = value; }
        }

        [DisplayName("Parent Username"), Expression("pUser.[Username]"), QuickSearch]
        public String ParentUsername
        {
            get { return Fields.ParentUsername[this]; }
            set { Fields.ParentUsername[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LeaderShipRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            //public Int32Field Id;
            public Int32Field UserId;
            public Int32Field ParentUserId;

            public StringField UserUsername;
            public StringField ParentUsername;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.LeaderShip";
            }
        }
    }
}
