using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Services;

namespace hr.Evaluation
{
    public class UserEmailRequest : ServiceRequest
    {
        public string Title { get; set; }
        public string UserName { get; set; }
        public string Url { get; set; }
        public string Email { get; set; }
        public string EvaluationUserName { get; set; }
    }

    public class BatchUserEmailRequest
    {
        public IList<UserEmailRequest> Entities { get; set; }
    }
}