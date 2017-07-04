using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace hr.Evaluation
{
    public partial class UserListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "hr.Evaluation.UserListFormatter";

        public UserListFormatterAttribute()
            : base(Key)
        {
        }
    }
}

