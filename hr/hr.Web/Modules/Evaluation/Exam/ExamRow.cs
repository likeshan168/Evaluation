
namespace hr.Evaluation.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[Exam]"), DisplayName("Exam"), InstanceName("Exam"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Evaluation.Exam")]
    public sealed class ExamRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }
        [DisplayName("Title"), NotNull, QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
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

        [DisplayName("Evaluation Ids"), Size(4000), NotNull, QuickSearch]
        public String EvaluationIds
        {
            get { return Fields.EvaluationIds[this]; }
            set { Fields.EvaluationIds[this] = value; }
        }

        [DisplayName("IsEnabled")]
        public bool? IsEnabled
        {
            get { return Fields.IsEnabled[this]; }
            set { Fields.IsEnabled[this] = value; }
        }

        [DisplayName("Remark"), Size(400)]
        public String Remark
        {
            get { return Fields.Remark[this]; }
            set { Fields.Remark[this] = value; }
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

        public ExamRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Title;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public StringField EvaluationIds;
            public BooleanField IsEnabled;
            public StringField Remark;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.Exam";
            }
        }
    }
}
