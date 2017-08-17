using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace hr.Evaluation
{
    public class BatchDeleteRequest : ServiceRequest
    {
        public List<int> Ids { get; set; }
    }
}