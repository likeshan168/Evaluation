
using System;

namespace hr.Common
{
    public class DashboardPageModel
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string CreateBy { get; set; }
        public string Url { get; set; }
        public int ExamId { get; set; }
    }
}