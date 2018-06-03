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
        /// <summary>
        /// 这个是标记所有的考核是否已经完成
        /// </summary>
        public bool IsComplete { get; set; }
        /// <summary>
        /// 这个是标记自我评价是完成
        /// </summary>
        public bool IsSelfEvaluationComplete { get; set; }

    }
}