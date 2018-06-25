namespace hr.Archive {
    export class ExamArchiveForm extends Serenity.PrefixedContext {
        static formKey = 'Archive.ExamArchive';

    }

    export interface ExamArchiveForm {
        ExamId: Serenity.IntegerEditor;
        ExamTitle: Serenity.StringEditor;
        FirstKpiName: Serenity.StringEditor;
        SecondKpiName: Serenity.StringEditor;
        Content: Serenity.StringEditor;
        ContentType: Serenity.IntegerEditor;
        Score: Serenity.IntegerEditor;
        Mark: Serenity.StringEditor;
        Remark: Serenity.StringEditor;
        EvaluationType: Serenity.IntegerEditor;
    }

    [['ExamId', () => Serenity.IntegerEditor], ['ExamTitle', () => Serenity.StringEditor], ['FirstKpiName', () => Serenity.StringEditor], ['SecondKpiName', () => Serenity.StringEditor], ['Content', () => Serenity.StringEditor], ['ContentType', () => Serenity.IntegerEditor], ['Score', () => Serenity.IntegerEditor], ['Mark', () => Serenity.StringEditor], ['Remark', () => Serenity.StringEditor], ['EvaluationType', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ExamArchiveForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

