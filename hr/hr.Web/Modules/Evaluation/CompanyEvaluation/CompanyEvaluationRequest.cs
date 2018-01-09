using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Services;

namespace hr.Modules.Evaluation.CompanyEvaluation
{
    public class CompanyEvaluationRequest: ServiceRequest
    {
        public int UserId { get; set; }
        public int ExamId { get; set; }

        public string Content { get; set; }
    }
}