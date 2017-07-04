
namespace hr.Evaluation.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;
    using System.ComponentModel;

    [FormScript("Evaluation.EmployeeExcelImport")]
    public class EmployeeExcelImportForm
    {
        [DisplayName("Excel文件"), FileUploadEditor, Required]
        public String FileName { get; set; }

    }
}
