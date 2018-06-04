
using hr.Evaluation.EvaluationFinalResult;

namespace hr.Evaluation.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[EvaluationFinalResult]"), DisplayName("Evaluation Final Result"), InstanceName("Evaluation Final Result"), TwoLevelCached]
    [ReadPermission(PermissionKeys.EvaluationFinalResult.View)]
    [ModifyPermission(PermissionKeys.EvaluationFinalResult.Modify)]
    public sealed class EvaluationFinalResultRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
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

        [DisplayName("Department Id")]
        public Int32? DepartmentId
        {
            get { return Fields.DepartmentId[this]; }
            set { Fields.DepartmentId[this] = value; }
        }

        [DisplayName("Exam Id"), NotNull]
        public Int32? ExamId
        {
            get { return Fields.ExamId[this]; }
            set { Fields.ExamId[this] = value; }
        }

        [DisplayName("Title"), Size(400), QuickSearch]
        [LookupEditor(typeof(ExamTitleLookup))]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("UserName"), Size(100), QuickSearch]
        [LookupEditor(typeof(ExamUserLookup))]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        [DisplayName("DepartmentName"), Size(100), QuickSearch]
        [LookupEditor(typeof(DepartmentNameLookup))]
        public String DepartmentName
        {
            get { return Fields.DepartmentName[this]; }
            set { Fields.DepartmentName[this] = value; }
        }

        [DisplayName("Total Score"), Size(38), Scale(1), QuickSearch]
        public Decimal? TotalScore
        {
            get { return Fields.TotalScore[this]; }
            set { Fields.TotalScore[this] = value; }
        }

        [DisplayName("Grade"), Size(4), NotNull, QuickSearch]
        [LookupEditor(typeof(GradeLookup))]
        public String Grade
        {
            get { return Fields.Grade[this]; }
            set { Fields.Grade[this] = value; }
        }

        [DisplayName("Email")]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
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

        public EvaluationFinalResultRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int32Field UserId;
            public Int32Field ExamId;
            public StringField Title;
            public StringField UserName;
            public DecimalField TotalScore;
            public StringField Grade;
            public StringField Email;
            public Int32Field DepartmentId;
            public StringField DepartmentName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.EvaluationFinalResult";
            }
        }
    }
}
