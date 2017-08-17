using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace hr.Evaluation
{
    public class MyExcelImportRequest: ExcelImportRequest
    {
        public int ExamId { get; set; }
    }
}