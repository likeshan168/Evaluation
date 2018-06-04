

namespace hr.Archive {
    export class CompanyEvaluationArchiveForm extends Serenity.PrefixedContext {
        static formKey = 'Archive.CompanyEvaluationArchive';
    }

    export interface CompanyEvaluationArchiveForm {
        ExamTitle: Serenity.StringEditor;
        UserName: Serenity.StringEditor;
        InputContent: Serenity.StringEditor;
        DepartmentName: Serenity.StringEditor;
    }

    [['ExamTitle', () => Serenity.StringEditor], ['UserName', () => Serenity.StringEditor], ['InputContent', () => Serenity.StringEditor], ['DepartmentName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(CompanyEvaluationArchiveForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}