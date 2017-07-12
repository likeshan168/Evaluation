using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace hr.Evaluation
{
    public class AddEvaluationResultRequest<T>: ServiceRequest
    {
        public AddEvaluationResultRequest() { }

        public List<T> Entities { get; set; }

        public bool IsComplete { get; set; }

    }
}