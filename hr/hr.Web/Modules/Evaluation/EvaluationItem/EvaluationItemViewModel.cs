using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace hr.Evaluation
{
    public class EvaluationItemViewModel
    {
        public int Id { get; set; }
        public Int32 OrderNo { get; set; }
        public String FirstKpiName { get; set; }
        public String SecondKpiName { get; set; }
        public String Content { get; set; }
        public ContentType ContentType { get; set; }
        public Int32 Score { get; set; }
        public String Mark { get; set; }
        public Boolean IsEnabled { get; set; }
        public String Remark { get; set; }
        public string InputContent { get; set; }
        public int FScore { get; set; }
    }
}