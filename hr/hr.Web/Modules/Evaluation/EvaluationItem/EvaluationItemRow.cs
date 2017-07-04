
namespace hr.Evaluation.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[EvaluationItem]"), DisplayName("Evaluation Item"), InstanceName("Evaluation Item"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EvaluationItemRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("OrderNo"), SortOrder(3, false),NotNull]
        public Int32? OrderNo
        {
            get { return Fields.OrderNo[this]; }
            set { Fields.OrderNo[this] = value; }
        }

        [DisplayName("Content"), Size(400), NotNull, QuickSearch, TextAreaEditor]
        public String Content
        {
            get { return Fields.Content[this]; }
            set { Fields.Content[this] = value; }
        }

        [DisplayName("Content Type"), NotNull]
        public ContentType? ContentType
        {
            get { return (ContentType)Fields.ContentType[this]; }
            set { Fields.ContentType[this] = (Int32?)value; }
        }

        [DisplayName("Score"), NotNull]
        public Int32? Score
        {
            get { return Fields.Score[this]; }
            set { Fields.Score[this] = value; }
        }

        [DisplayName("Mark"), Size(-1), TextAreaEditor]
        public String Mark
        {
            get { return Fields.Mark[this]; }
            set { Fields.Mark[this] = value; }
        }

        [DisplayName("Is Enabled"), NotNull]
        public Boolean? IsEnabled
        {
            get { return Fields.IsEnabled[this]; }
            set { Fields.IsEnabled[this] = value; }
        }

        [DisplayName("Is SelfEvaluation"), NotNull]
        public Boolean? IsSelfEvaluation
        {
            get { return Fields.IsSelfEvaluation[this]; }
            set { Fields.IsSelfEvaluation[this] = value; }
        }

        [DisplayName("Remark"), Size(400)]
        public String Remark
        {
            get { return Fields.Remark[this]; }
            set { Fields.Remark[this] = value; }
        }

        [DisplayName("First Kpi"), ForeignKey("[hr].[FirstKPI]", "Id"), LeftJoin("jFirstKpi"), TextualField("FirstKpiName")]
        [LookupEditor(typeof(FirstKpiRow), InplaceAdd = true)]
        public Int32? FirstKpiId
        {
            get { return Fields.FirstKpiId[this]; }
            set { Fields.FirstKpiId[this] = value; }
        }

        [DisplayName("First Kpi Name"), Expression("jFirstKpi.[Name]"), SortOrder(1, false)]
        public String FirstKpiName
        {
            get { return Fields.FirstKpiName[this]; }
            set { Fields.FirstKpiName[this] = value; }
        }

        [DisplayName("Second Kpi"), ForeignKey("[hr].[SecondKPI]", "Id"), LeftJoin("jSecondKpi"), TextualField("SecondKpiName")]
        [LookupEditor(typeof(SecondKpiRow), InplaceAdd = true, CascadeFrom = "FirstKpiId", CascadeField = "FirstKpiId")]
        public Int32? SecondKpiId
        {
            get { return Fields.SecondKpiId[this]; }
            set { Fields.SecondKpiId[this] = value; }
        }

        [DisplayName("Second Kpi Name"), Expression("jSecondKpi.[Name]"), SortOrder(3, false)]
        public String SecondKpiName
        {
            get { return Fields.SecondKpiName[this]; }
            set { Fields.SecondKpiName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Content; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EvaluationItemRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field OrderNo;
            public StringField Content;
            public Int32Field ContentType;
            public Int32Field Score;
            public StringField Mark;
            public BooleanField IsEnabled;
            public BooleanField IsSelfEvaluation;
            public StringField Remark;
            public Int32Field SecondKpiId;
            public StringField SecondKpiName;
            public Int32Field FirstKpiId;
            public StringField FirstKpiName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.EvaluationItem";
            }
        }
    }
}
