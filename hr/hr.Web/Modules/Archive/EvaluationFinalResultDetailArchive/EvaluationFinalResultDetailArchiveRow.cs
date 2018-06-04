
namespace hr.Archive.Entities
{
    using hr.Evaluation.EvaluationFinalResult;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[EvaluationFinalResultDetail_Archive]"), DisplayName("Evaluation Final Result Detail Archive"), InstanceName("Evaluation Final Result Detail Archive"), TwoLevelCached]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class EvaluationFinalResultDetailArchiveRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Exam Title"), Size(200), NotNull, QuickSearch]
        [LookupEditor(typeof(ExamTitleLookup))]
        public String ExamTitle
        {
            get { return Fields.ExamTitle[this]; }
            set { Fields.ExamTitle[this] = value; }
        }

        [DisplayName("User Name"), Size(30), NotNull, QuickSearch]
        [LookupEditor(typeof(ExamUserLookup))]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        [DisplayName("Score")]
        public Int32? Score
        {
            get { return Fields.Score[this]; }
            set { Fields.Score[this] = value; }
        }

        [DisplayName("Evaluation User Name"), Size(30), QuickSearch]
        public String EvaluationUserName
        {
            get { return Fields.EvaluationUserName[this]; }
            set { Fields.EvaluationUserName[this] = value; }
        }

        [DisplayName("Department Name"), Size(30), QuickSearch]
        [LookupEditor(typeof(DepartmentNameLookup))]
        public String DepartmentName
        {
            get { return Fields.DepartmentName[this]; }
            set { Fields.DepartmentName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ExamTitle; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EvaluationFinalResultDetailArchiveRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField ExamTitle;
            public StringField UserName;
            public Int32Field Score;
            public StringField EvaluationUserName;
            public StringField DepartmentName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Archive.EvaluationFinalResultDetailArchive";
            }
        }
    }
}
