
namespace hr.Evaluation.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[TodoListView]"), DisplayName("Todo List View"), InstanceName("Todo List View"), TwoLevelCached]
    [ReadPermission(PermissionKeys.EvaluationFinalResult.View)]
    [ModifyPermission(PermissionKeys.EvaluationFinalResult.Modify)]
    public sealed class TodoListViewRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), NotNull]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("User Id")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Username"), Size(100), QuickSearch]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Url"), Size(400)]
        public String Url
        {
            get { return Fields.Url[this]; }
            set { Fields.Url[this] = value; }
        }

        [DisplayName("Start Date"), NotNull]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("End Date"), NotNull]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Title"), Size(400)]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Is Complete"), NotNull]
        public Boolean? IsComplete
        {
            get { return Fields.IsComplete[this]; }
            set { Fields.IsComplete[this] = value; }
        }

        [DisplayName("Is Enabled")]
        public Boolean? IsEnabled
        {
            get { return Fields.IsEnabled[this]; }
            set { Fields.IsEnabled[this] = value; }
        }

        [DisplayName("Exam Id")]
        public Int32? ExamId
        {
            get { return Fields.ExamId[this]; }
            set { Fields.ExamId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Username; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TodoListViewRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field UserId;
            public StringField Username;
            public StringField Email;
            public StringField Url;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public StringField Title;
            public BooleanField IsComplete;
            public BooleanField IsEnabled;
            public Int32Field ExamId;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.TodoListView";
            }
        }
    }
}
