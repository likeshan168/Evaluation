
namespace hr.Evaluation.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[UserEvaluationToUser]"), DisplayName("User Evaluation To User"), InstanceName("User Evaluation To User"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class UserEvaluationToUserRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("User Evaluation Relation"), NotNull, ForeignKey("[hr].[UserEvaluationRelation]", "Id"), LeftJoin("jUserEvaluationRelation"), TextualField("UserEvaluationRelationRemark")]
        public Int32? UserEvaluationRelationId
        {
            get { return Fields.UserEvaluationRelationId[this]; }
            set { Fields.UserEvaluationRelationId[this] = value; }
        }

        [DisplayName("User"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("User Evaluation Relation User Id"), Expression("jUserEvaluationRelation.[UserId]")]
        public Int32? UserEvaluationRelationUserId
        {
            get { return Fields.UserEvaluationRelationUserId[this]; }
            set { Fields.UserEvaluationRelationUserId[this] = value; }
        }

        [DisplayName("User Evaluation Relation Exam Id"), Expression("jUserEvaluationRelation.[ExamId]")]
        public Int32? UserEvaluationRelationExamId
        {
            get { return Fields.UserEvaluationRelationExamId[this]; }
            set { Fields.UserEvaluationRelationExamId[this] = value; }
        }

        [DisplayName("User Evaluation Relation Remark"), Expression("jUserEvaluationRelation.[Remark]")]
        public String UserEvaluationRelationRemark
        {
            get { return Fields.UserEvaluationRelationRemark[this]; }
            set { Fields.UserEvaluationRelationRemark[this] = value; }
        }

        [DisplayName("User Username"), Expression("jUser.[Username]")]
        public String UserUsername
        {
            get { return Fields.UserUsername[this]; }
            set { Fields.UserUsername[this] = value; }
        }

        [DisplayName("User Display Name"), Expression("jUser.[DisplayName]")]
        public String UserDisplayName
        {
            get { return Fields.UserDisplayName[this]; }
            set { Fields.UserDisplayName[this] = value; }
        }

        [DisplayName("User Email"), Expression("jUser.[Email]")]
        public String UserEmail
        {
            get { return Fields.UserEmail[this]; }
            set { Fields.UserEmail[this] = value; }
        }

        [DisplayName("User Source"), Expression("jUser.[Source]")]
        public String UserSource
        {
            get { return Fields.UserSource[this]; }
            set { Fields.UserSource[this] = value; }
        }

        [DisplayName("User Password Hash"), Expression("jUser.[PasswordHash]")]
        public String UserPasswordHash
        {
            get { return Fields.UserPasswordHash[this]; }
            set { Fields.UserPasswordHash[this] = value; }
        }

        [DisplayName("User Password Salt"), Expression("jUser.[PasswordSalt]")]
        public String UserPasswordSalt
        {
            get { return Fields.UserPasswordSalt[this]; }
            set { Fields.UserPasswordSalt[this] = value; }
        }

        [DisplayName("User Last Directory Update"), Expression("jUser.[LastDirectoryUpdate]")]
        public DateTime? UserLastDirectoryUpdate
        {
            get { return Fields.UserLastDirectoryUpdate[this]; }
            set { Fields.UserLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("User User Image"), Expression("jUser.[UserImage]")]
        public String UserUserImage
        {
            get { return Fields.UserUserImage[this]; }
            set { Fields.UserUserImage[this] = value; }
        }

        [DisplayName("User Insert Date"), Expression("jUser.[InsertDate]")]
        public DateTime? UserInsertDate
        {
            get { return Fields.UserInsertDate[this]; }
            set { Fields.UserInsertDate[this] = value; }
        }

        [DisplayName("User Insert User Id"), Expression("jUser.[InsertUserId]")]
        public Int32? UserInsertUserId
        {
            get { return Fields.UserInsertUserId[this]; }
            set { Fields.UserInsertUserId[this] = value; }
        }

        [DisplayName("User Update Date"), Expression("jUser.[UpdateDate]")]
        public DateTime? UserUpdateDate
        {
            get { return Fields.UserUpdateDate[this]; }
            set { Fields.UserUpdateDate[this] = value; }
        }

        [DisplayName("User Update User Id"), Expression("jUser.[UpdateUserId]")]
        public Int32? UserUpdateUserId
        {
            get { return Fields.UserUpdateUserId[this]; }
            set { Fields.UserUpdateUserId[this] = value; }
        }

        [DisplayName("User Is Active"), Expression("jUser.[IsActive]")]
        public Int16? UserIsActive
        {
            get { return Fields.UserIsActive[this]; }
            set { Fields.UserIsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserEvaluationToUserRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field UserEvaluationRelationId;
            public Int32Field UserId;

            public Int32Field UserEvaluationRelationUserId;
            public Int32Field UserEvaluationRelationExamId;
            public StringField UserEvaluationRelationRemark;

            public StringField UserUsername;
            public StringField UserDisplayName;
            public StringField UserEmail;
            public StringField UserSource;
            public StringField UserPasswordHash;
            public StringField UserPasswordSalt;
            public DateTimeField UserLastDirectoryUpdate;
            public StringField UserUserImage;
            public DateTimeField UserInsertDate;
            public Int32Field UserInsertUserId;
            public DateTimeField UserUpdateDate;
            public Int32Field UserUpdateUserId;
            public Int16Field UserIsActive;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.UserEvaluationToUser";
            }
        }
    }
}
