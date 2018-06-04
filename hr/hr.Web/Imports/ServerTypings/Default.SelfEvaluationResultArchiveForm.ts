

namespace hr.Default {
    export class SelfEvaluationResultArchiveForm extends Serenity.PrefixedContext {
        static formKey = 'Default.SelfEvaluationResultArchive';
    }

    export interface SelfEvaluationResultArchiveForm {
        ExamTitle: Serenity.StringEditor;
        UserName: Serenity.StringEditor;
        ExamContent: Serenity.StringEditor;
        InputContent: Serenity.StringEditor;
        DepartmentName: Serenity.StringEditor;
    }

    [['ExamTitle', () => Serenity.StringEditor], ['UserName', () => Serenity.StringEditor], ['ExamContent', () => Serenity.StringEditor], ['InputContent', () => Serenity.StringEditor], ['DepartmentName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SelfEvaluationResultArchiveForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}