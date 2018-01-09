
using hr.Administration.Entities;

namespace hr.Evaluation.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[CompanyEvaluation]"), DisplayName("Company Evaluation"), InstanceName("Company Evaluation"), TwoLevelCached]
    [ReadPermission(PermissionKeys.CompanyEvaluation.View)]
    [ModifyPermission(PermissionKeys.CompanyEvaluation.Modify)]
    public sealed class CompanyEvaluationRow : Row, IIdRow
    {
        [DisplayName("Company Evaluation Id"), Identity]
        public Int64? CompanyEvaluationId
        {
            get { return Fields.CompanyEvaluationId[this]; }
            set { Fields.CompanyEvaluationId[this] = value; }
        }

        [DisplayName("User"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("Username")]
        [LookupEditor(typeof(UserRow))]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Evaluation Content")]
        public string EvaluationContent
        {
            get { return Fields.EvaluationContent[this]; }
            set { Fields.EvaluationContent[this] = value; }
        }

        [DisplayName("Username"), Expression("jUser.[Username]")]
        [QuickSearch]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("User Email"), Expression("jUser.[Email]")]
        public String UserEmail
        {
            get { return Fields.UserEmail[this]; }
            set { Fields.UserEmail[this] = value; }
        }

        [DisplayName("Exam"), NotNull, ForeignKey("[hr].[Exam]", "Id"), LeftJoin("jExam"), TextualField("Title")]
        [LookupEditor(typeof(ExamRow))]
        public Int32? ExamId
        {
            get { return Fields.ExamId[this]; }
            set { Fields.ExamId[this] = value; }
        }

        [DisplayName("Title"), Expression("jExam.[Title]")]
        [QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CompanyEvaluationId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CompanyEvaluationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field CompanyEvaluationId;
            public Int32Field UserId;
            public Int32Field ExamId;
            public StringField EvaluationContent;

            public StringField Username;
            public StringField UserEmail;
            public StringField Title;


            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.CompanyEvaluation";
            }
        }
    }
}
