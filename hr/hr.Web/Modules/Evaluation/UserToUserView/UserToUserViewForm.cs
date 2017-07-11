
namespace hr.Evaluation.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Evaluation.UserToUserView")]
    [BasedOnRow(typeof(Entities.UserToUserViewRow))]
    public class UserToUserViewForm
    {
        public Int32 Id { get; set; }
        public Int32 UserId { get; set; }
        public Int32 ExamId { get; set; }
        public Int32 EvaluationUserId { get; set; }
    }
}