
namespace hr.Evaluation.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[EvaluationResult]"), DisplayName("Evaluation Result"), InstanceName("Evaluation Result"), TwoLevelCached]
    [ReadPermission(PermissionKeys.EvaluationResult.View)]
    [ModifyPermission(PermissionKeys.EvaluationResult.Modify)]
    public sealed class EvaluationResultRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("User"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Exam"), NotNull, ForeignKey("[hr].[Exam]", "Id"), LeftJoin("jExam"), TextualField("ExamEvaluationIds")]
        public Int32? ExamId
        {
            get { return Fields.ExamId[this]; }
            set { Fields.ExamId[this] = value; }
        }

        [DisplayName("Total Score")]
        public Int32? TotalScore
        {
            get { return Fields.TotalScore[this]; }
            set { Fields.TotalScore[this] = value; }
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

        public static readonly RowFields Fields = new RowFields().Init();

        public EvaluationResultRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field UserId;
            public Int32Field ExamId;
            public Int32Field TotalScore;

            public StringField UserUsername;
            public StringField ExamTitle;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.EvaluationResult";
            }
        }
    }
}
