
namespace hr.Archive.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[Exam_Archive]"), DisplayName("Exam Archive"), InstanceName("Exam Archive"), TwoLevelCached]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class ExamArchiveRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Exam Id"), NotNull]
        public Int32? ExamId
        {
            get { return Fields.ExamId[this]; }
            set { Fields.ExamId[this] = value; }
        }

        [DisplayName("Exam Title"), Size(200), NotNull, QuickSearch]
        public String ExamTitle
        {
            get { return Fields.ExamTitle[this]; }
            set { Fields.ExamTitle[this] = value; }
        }

        [DisplayName("First Kpi Name"), Size(200), NotNull]
        public String FirstKpiName
        {
            get { return Fields.FirstKpiName[this]; }
            set { Fields.FirstKpiName[this] = value; }
        }

        [DisplayName("Second Kpi Name"), Size(200), NotNull]
        public String SecondKpiName
        {
            get { return Fields.SecondKpiName[this]; }
            set { Fields.SecondKpiName[this] = value; }
        }

        [DisplayName("Content"), Size(4000)]
        public String Content
        {
            get { return Fields.Content[this]; }
            set { Fields.Content[this] = value; }
        }

        [DisplayName("Content Type")]
        public Int32? ContentType
        {
            get { return Fields.ContentType[this]; }
            set { Fields.ContentType[this] = value; }
        }

        [DisplayName("Score")]
        public Int32? Score
        {
            get { return Fields.Score[this]; }
            set { Fields.Score[this] = value; }
        }

        [DisplayName("Mark"), Size(400)]
        public String Mark
        {
            get { return Fields.Mark[this]; }
            set { Fields.Mark[this] = value; }
        }

        [DisplayName("Remark"), Size(1000)]
        public String Remark
        {
            get { return Fields.Remark[this]; }
            set { Fields.Remark[this] = value; }
        }

        [DisplayName("Evaluation Type"), NotNull]
        public Int32? EvaluationType
        {
            get { return Fields.EvaluationType[this]; }
            set { Fields.EvaluationType[this] = value; }
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

        public ExamArchiveRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int32Field ExamId;
            public StringField ExamTitle;
            public StringField FirstKpiName;
            public StringField SecondKpiName;
            public StringField Content;
            public Int32Field ContentType;
            public Int32Field Score;
            public StringField Mark;
            public StringField Remark;
            public Int32Field EvaluationType;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Archive.ExamArchive";
            }
        }
    }
}
