
namespace hr.Evaluation.Forms
{
    using hr.Evaluation.Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;
    using System.ComponentModel;

    [FormScript("Evaluation.UserEvaluationRelationExcelImport")]
    public class UserEvaluationRelationImportForm
    {
        [LookupEditor(typeof(ExamRow)), Required, DisplayName("考核")]
        public string ExamId { get; set; }
        [DisplayName("Excel文件"), FileUploadEditor, Required]
        public String FileName { get; set; }

    }
}
