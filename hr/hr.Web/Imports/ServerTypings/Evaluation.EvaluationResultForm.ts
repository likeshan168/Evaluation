namespace hr.Evaluation {
    export class EvaluationResultForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.EvaluationResult';

    }

    export interface EvaluationResultForm {
        UserId: Serenity.IntegerEditor;
        ExamId: Serenity.IntegerEditor;
        TotalScore: Serenity.IntegerEditor;
    }

    [['UserId', () => Serenity.IntegerEditor], ['ExamId', () => Serenity.IntegerEditor], ['TotalScore', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(EvaluationResultForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

