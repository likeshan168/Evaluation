
namespace hr.Evaluation.Entities
{
    using hr.Administration.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[UserEvaluationRelation]"), DisplayName("User Evaluation Relation"), InstanceName("User Evaluation Relation"), TwoLevelCached]
    [ReadPermission(PermissionKeys.UserEvaluationRelation.View)]
    [ModifyPermission(PermissionKeys.UserEvaluationRelation.Modify)]
    public sealed class UserEvaluationRelationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("User"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        [LookupEditor(typeof(UserRow), InplaceAdd = true)]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        //[DisplayName("Evaluation User Ids"), Size(400), NotNull, QuickSearch]
        //public String EvaluationUserIds
        //{
        //    get { return Fields.EvaluationUserIds[this]; }
        //    set { Fields.EvaluationUserIds[this] = value; }
        //}

        [DisplayName("Users")]
        [LookupEditor(typeof(UserRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(UserEvaluationToUserRow), "UserEvaluationRelationId", "UserId")]
        public List<Int32> UserList
        {
            get { return Fields.UserList[this]; }
            set { Fields.UserList[this] = value; }
        }

        [DisplayName("Exam"), NotNull, ForeignKey("[hr].[Exam]", "Id"), LeftJoin("jExam"), TextualField("ExamTitle")]
        [LookupEditor(typeof(ExamRow),InplaceAdd = true)]
        public Int32? ExamId
        {
            get { return Fields.ExamId[this]; }
            set { Fields.ExamId[this] = value; }
        }

        [DisplayName("Remark"), Size(400)]
        public String Remark
        {
            get { return Fields.Remark[this]; }
            set { Fields.Remark[this] = value; }
        }

        [DisplayName("User Username"), Expression("jUser.[Username]")]
        public String UserUsername
        {
            get { return Fields.UserUsername[this]; }
            set { Fields.UserUsername[this] = value; }
        }

        [DisplayName("Exam Title"), Expression("jExam.[Title]")]
        public String ExamTitle
        {
            get { return Fields.ExamTitle[this]; }
            set { Fields.ExamTitle[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.UserUsername; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserEvaluationRelationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field UserId;
            //public StringField EvaluationUserIds;
            public ListField<Int32> UserList;
            public Int32Field ExamId;
            public StringField Remark;

            public StringField UserUsername;

            public StringField ExamTitle;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.UserEvaluationRelation";
            }
        }
    }
}
