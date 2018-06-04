

namespace hr.Archive {
    export class EvaluationFinalResultArchiveForm extends Serenity.PrefixedContext {
        static formKey = 'Archive.EvaluationFinalResultArchive';
    }

    export interface EvaluationFinalResultArchiveForm {
        ExamTitle: Serenity.StringEditor;
        UserName: Serenity.StringEditor;
        TotalScore: Serenity.IntegerEditor;
        Grade: Serenity.StringEditor;
        DepartmentName: Serenity.StringEditor;
    }

    [['ExamTitle', () => Serenity.StringEditor], ['UserName', () => Serenity.StringEditor], ['TotalScore', () => Serenity.IntegerEditor], ['Grade', () => Serenity.StringEditor], ['DepartmentName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(EvaluationFinalResultArchiveForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}