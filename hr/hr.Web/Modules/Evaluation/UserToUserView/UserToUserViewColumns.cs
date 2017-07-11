
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.UserToUserView")]
    [BasedOnRow(typeof(Entities.UserToUserViewRow))]
    public class UserToUserViewColumns
    {
        public Int32 Id { get; set; }
        public Int32 UserId { get; set; }
        public Int32 ExamId { get; set; }
        public Int32 EvaluationUserId { get; set; }
    }
}