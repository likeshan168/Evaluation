
namespace hr.Evaluation.Entities
{
    using hr.Administration.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[ToDoList]"), DisplayName("To Do List"), InstanceName("To Do List"), TwoLevelCached]
    [ReadPermission(PermissionKeys.ToDoList.View)]
    [ModifyPermission(PermissionKeys.ToDoList.Modify)]
    public sealed class ToDoListRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("User"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        [LookupEditor(typeof(UserRow))]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Title"), Size(400), NotNull, QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Content"), Size(-1), NotNull, TextAreaEditor]
        public String Content
        {
            get { return Fields.Content[this]; }
            set { Fields.Content[this] = value; }
        }

        [DisplayName("User Username"), Expression("jUser.[Username]")]
        public String UserUsername
        {
            get { return Fields.UserUsername[this]; }
            set { Fields.UserUsername[this] = value; }
        }
        [DisplayName("IsComplete")]
        public bool? IsComplete
        {
            get { return Fields.IsComplete[this]; }
            set { Fields.IsComplete[this] = value; }
        }

        [DisplayName("StartDate"), NotNull]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("EndDate"), NotNull]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }
        [DisplayName("CreateBy"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("lUser"), TextualField("CreateByUsername")]
        [LookupEditor(typeof(UserRow))]
        public Int32? CreateBy
        {
            get { return Fields.CreateBy[this]; }
            set { Fields.CreateBy[this] = value; }
        }

        [DisplayName("CreateBy Username"), Expression("lUser.[Username]")]
        public String CreateByUsername
        {
            get { return Fields.CreateByUsername[this]; }
            set { Fields.CreateByUsername[this] = value; }
        }

        [DisplayName("Url")]
        public String Url
        {
            get { return Fields.Url[this]; }
            set { Fields.Url[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ToDoListRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field UserId;
            public StringField Title;
            public StringField Content;
            public BooleanField IsComplete;
            public StringField UserUsername;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public Int32Field CreateBy;
            public StringField CreateByUsername;
            public StringField Url;
            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.ToDoList";
            }
        }
    }
}
