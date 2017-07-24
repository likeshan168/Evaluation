using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace hr.Evaluation
{
    public class BatchEmailRequest: ServiceRequest
    {
        public List<BEmailRequest> Users { get; set; }
    }

    public class BEmailRequest
    {
        public int UserId { get; set; }
        public string ExamId { get; set; }
    }
}