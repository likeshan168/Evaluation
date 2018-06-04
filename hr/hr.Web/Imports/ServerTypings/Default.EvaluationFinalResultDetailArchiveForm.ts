

namespace hr.Default {
    export class EvaluationFinalResultDetailArchiveForm extends Serenity.PrefixedContext {
        static formKey = 'Default.EvaluationFinalResultDetailArchive';
    }

    export interface EvaluationFinalResultDetailArchiveForm {
        ExamTitle: Serenity.StringEditor;
        UserName: Serenity.StringEditor;
        Score: Serenity.IntegerEditor;
        EvaluationUserName: Serenity.StringEditor;
        DepartmentName: Serenity.StringEditor;
    }

    [['ExamTitle', () => Serenity.StringEditor], ['UserName', () => Serenity.StringEditor], ['Score', () => Serenity.IntegerEditor], ['EvaluationUserName', () => Serenity.StringEditor], ['DepartmentName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(EvaluationFinalResultDetailArchiveForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}