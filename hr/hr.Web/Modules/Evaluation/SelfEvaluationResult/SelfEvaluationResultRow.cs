
//using hr.Evaluation.SelfEvaluationResult;
namespace hr.Evaluation.Entities
{
    using hr.Evaluation.EvaluationFinalResult;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), TableName("[hr].[SelfEvaluationResult]"), DisplayName("Self Evaluation Result"), InstanceName("Self Evaluation Result"), TwoLevelCached]
    [ReadPermission(PermissionKeys.SelfEvaluationResult.View)]
    [ModifyPermission(PermissionKeys.SelfEvaluationResult.Modify)]
    public sealed class SelfEvaluationResultRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Title"), Size(400), QuickSearch]
        [LookupEditor(typeof(ExamTitleLookup))]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Content"), Size(400), QuickSearch]
        public String Content
        {
            get { return Fields.Content[this]; }
            set { Fields.Content[this] = value; }
        }

        [DisplayName("Input Content"), Size(-1)]
        public String InputContent
        {
            get { return Fields.InputContent[this]; }
            set { Fields.InputContent[this] = value; }
        }

        [DisplayName("Username"), Size(100), QuickSearch]
        [LookupEditor(typeof(ExamUserLookup))]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("Department Name"), Size(50)]
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
            get { return Fields.Content; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SelfEvaluationResultRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField Title;
            public StringField Content;
            public StringField InputContent;
            public StringField Username;
            public StringField DepartmentName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.SelfEvaluationResult";
            }
        }
    }
}
