using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace hr.Evaluation
{
    public class EvaluationItemRequest : ServiceRequest
    {
        public EvaluationItemRequest() { }
        public int ExamId { get; set; }
        public int UserId { get; set; }
    }
}