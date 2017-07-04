namespace hr.Evaluation {
    export class ExamForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.Exam';

    }

    export interface ExamForm {
        Title: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        EvaluationIds: Serenity.StringEditor;
        IsEnabled: Serenity.BooleanEditor;
        Remark: Serenity.StringEditor;
    }

    [['Title', () => Serenity.StringEditor], ['StartDate', () => Serenity.DateEditor], ['EndDate', () => Serenity.DateEditor], ['EvaluationIds', () => Serenity.StringEditor], ['IsEnabled', () => Serenity.BooleanEditor], ['Remark', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ExamForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

