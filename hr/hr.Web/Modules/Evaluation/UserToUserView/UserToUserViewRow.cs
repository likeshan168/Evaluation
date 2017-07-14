
namespace hr.Evaluation.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[UserToUserView]"), DisplayName("User To User View"), InstanceName("User To User View"), TwoLevelCached]
    [ReadPermission(PermissionKeys.EvaluationFinalResult.View)]
    [ModifyPermission(PermissionKeys.EvaluationFinalResult.Modify)]
    public sealed class UserToUserViewRow : Row, IIdRow
    {
        [DisplayName("Id")]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("User Id"), NotNull]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Exam Id"), NotNull]
        public Int32? ExamId
        {
            get { return Fields.ExamId[this]; }
            set { Fields.ExamId[this] = value; }
        }

        [DisplayName("Evaluation User Id")]
        public Int32? EvaluationUserId
        {
            get { return Fields.EvaluationUserId[this]; }
            set { Fields.EvaluationUserId[this] = value; }
        }

        [DisplayName("Email"), Size(100), QuickSearch]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Username"), Size(100)]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }

        }
        [DisplayName("HasEvaluated"), Size(100)]
        public bool? HasEvaluated
        {
            get
            {
                return Fields.HasEvaluated[this];
            }
            set
            {
                Fields.HasEvaluated[this] = value;
            }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserToUserViewRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field UserId;
            public Int32Field ExamId;
            public Int32Field EvaluationUserId;
            public StringField Email;
            public StringField Username;
            public BooleanField HasEvaluated;
            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.UserToUserView";
            }
        }
    }
}
