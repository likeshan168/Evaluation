
namespace hr.Evaluation.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[EvaluationResultDetail]"), DisplayName("Evaluation Result Detail"), InstanceName("Evaluation Result Detail"), TwoLevelCached]
    [ReadPermission(PermissionKeys.EvaluationResultDetail.View)]
    [ModifyPermission(PermissionKeys.EvaluationResultDetail.Modify)]
    public sealed class EvaluationResultDetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("User Id"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUsers")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Exam Id"), NotNull]
        public Int32? ExamId
        {
            get { return Fields.ExamId[this]; }
            set { Fields.ExamId[this] = value; }
        }

        [DisplayName("Evaluation Item"), ForeignKey("[hr].[EvaluationItem]", "Id"), LeftJoin("jEvaluationItem"), TextualField("EvaluationItemContent")]
        public Int32? EvaluationItemId
        {
            get { return Fields.EvaluationItemId[this]; }
            set { Fields.EvaluationItemId[this] = value; }
        }

        [DisplayName("Input Content"), Size(-1), QuickSearch]
        public String InputContent
        {
            get { return Fields.InputContent[this]; }
            set { Fields.InputContent[this] = value; }
        }

        [DisplayName("Score")]
        public Int32? Score
        {
            get { return Fields.Score[this]; }
            set { Fields.Score[this] = value; }
        }

        [DisplayName("EvaluationUserId")]
        public Int32? EvaluationUserId
        {
            get { return Fields.EvaluationUserId[this]; }
            set { Fields.EvaluationUserId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.InputContent; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EvaluationResultDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int32Field ExamId;
            public Int32Field EvaluationItemId;
            public StringField InputContent;
            public Int32Field Score;
            public Int32Field UserId;
            public Int32Field EvaluationUserId;


            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.EvaluationResultDetail";
            }
        }
    }
}
