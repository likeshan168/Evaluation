
using System;

namespace hr.Common
{
    public class DashboardPageModel
    {
        public int? Id { get; set; }
        public string Title { get; set; }
        //public string Content { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        //public string CreateBy { get; set; }
        //public string Url { get; set; }
        //public int ExamId { get; set; }
        public bool IsSelfEvaluated { get; set; }
        public bool IsCompanyEvaluated { get; set; }
        public int? UserId { get; set; }
    }
}