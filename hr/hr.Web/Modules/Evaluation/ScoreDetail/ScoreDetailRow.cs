
namespace hr.Evaluation.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[hr].[ScoreDetail]"), DisplayName("Score Detail"), InstanceName("Score Detail"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ScoreDetailRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Evaluation Result Detail Id")]
        public Int32? EvaluationResultDetailId
        {
            get { return Fields.EvaluationResultDetailId[this]; }
            set { Fields.EvaluationResultDetailId[this] = value; }
        }

        [DisplayName("User Id")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Score")]
        public Int32? Score
        {
            get { return Fields.Score[this]; }
            set { Fields.Score[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ScoreDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field EvaluationResultDetailId;
            public Int32Field UserId;
            public Int32Field Score;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Evaluation.ScoreDetail";
            }
        }
    }
}
