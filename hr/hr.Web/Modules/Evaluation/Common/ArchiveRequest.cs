using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace hr.Evaluation
{
    public class ArchiveRequest: ServiceRequest
    {
        public int ExamId { get; set; }
        public string Title{get;set;}
    }
}