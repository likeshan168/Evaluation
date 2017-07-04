
namespace hr.Evaluation.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[FirstKPI]"), DisplayName("First Kpi"), InstanceName("First Kpi"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Evaluation.FirstKpi")]

    public sealed class FirstKpiRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("OrderNo"), SortOrder(1, false)]
        public Int32? OrderNo
        {
            get { return Fields.OrderNo[this]; }
            set { Fields.OrderNo[this] = value; }
        }


        [DisplayName("Name"), Size(50), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Remark"), Size(100)]
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
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FirstKpiRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field OrderNo;
            public StringField Name;
            public StringField Remark;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.FirstKpi";
            }
        }
    }
}
