﻿
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.UserEvaluationRelation")]
    [BasedOnRow(typeof(Entities.UserEvaluationRelationRow))]
    public class UserEvaluationRelationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), SortOrder(1, false)]
        public Int32 Id { get; set; }
        [QuickFilter]
        public String UserUsername { get; set; }
        //[EditLink]
        [Width(200), UserListFormatter]
        public List<Int32> UserList { get; set; }
        //public String EvaluationUserIds { get; set; }
        [QuickFilter]
        public String ExamTitle { get; set; }
        public String Remark { get; set; }
    }
}