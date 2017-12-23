using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace hr.Evaluation
{
    public class UserViewModel
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public bool HasEvaluated { get; set; }
    }
}