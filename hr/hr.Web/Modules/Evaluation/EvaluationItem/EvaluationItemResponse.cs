using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Services;

namespace hr.Evaluation
{
    public class EvaluationItemResponse : ServiceResponse
    {
        public bool IsSelfEvaluated { get; set; }
        public List<EvaluationItemViewModel> Items { get; set; }
    }
}