using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Services;

namespace hr.Administration
{
    public class BatchUpdateUserRequest : ServiceRequest
    {
        public List<int> Userids { get; set; }
    }
}