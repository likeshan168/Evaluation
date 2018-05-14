
namespace hr.Evaluation.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[SelfEvaluationRecord]"), DisplayName("Self Evaluation Record"), InstanceName("Self Evaluation Record"), TwoLevelCached]
    [ReadPermission(PermissionKeys.EvaluationResultDetail.View)]
    [ModifyPermission(PermissionKeys.EvaluationResultDetail.Modify)]
    public sealed class SelfEvaluationRecordRow : Row, IIdRow
    {
        [DisplayName("Self Evaluation Record Id"), Identity]
        public Int64? SelfEvaluationRecordId
        {
            get { return Fields.SelfEvaluationRecordId[this]; }
            set { Fields.SelfEvaluationRecordId[this] = value; }
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

        [DisplayName("Evaluation Date"), NotNull]
        public DateTime? EvaluationDate
        {
            get { return Fields.EvaluationDate[this]; }
            set { Fields.EvaluationDate[this] = value; }
        }

        [DisplayName("Is Self Evaluated"), NotNull]
        public Boolean? IsSelfEvaluated
        {
            get { return Fields.IsSelfEvaluated[this]; }
            set { Fields.IsSelfEvaluated[this] = value; }
        }

        [DisplayName("Username"), Expression("jUser.[Username]")]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("Exam Title"), Expression("jExam.[Title]")]
        public String ExamTitle
        {
            get { return Fields.ExamTitle[this]; }
            set { Fields.ExamTitle[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SelfEvaluationRecordId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SelfEvaluationRecordRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field SelfEvaluationRecordId;
            public Int32Field UserId;
            public Int32Field ExamId;
            public DateTimeField EvaluationDate;
            public BooleanField IsSelfEvaluated;

            public StringField Username;
            public StringField ExamTitle;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.SelfEvaluationRecord";
            }
        }
    }
}
