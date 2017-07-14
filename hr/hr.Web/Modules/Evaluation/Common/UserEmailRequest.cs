using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace hr.Evaluation
{
    public class UserEmailRequest
    {
        public string Title { get; set; }
        public string UserName { get; set; }
        public string Url { get; set; }
        public string Email { get; set; }
        public string EvaluationUserName { get; set; }
    }
}