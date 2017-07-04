
namespace hr.Evaluation.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Evaluation.UserEvaluationRelation")]
    [BasedOnRow(typeof(Entities.UserEvaluationRelationRow))]
    public class UserEvaluationRelationForm
    {
        public Int32 UserId { get; set; }
        //public String EvaluationUserIds { get; set; }
        public List<Int32> UserList { get; set; }
        public Int32 ExamId { get; set; }
        public String Remark { get; set; }
    }
}