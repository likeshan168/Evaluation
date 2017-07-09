namespace hr.Evaluation {
    export class EvaluationResultDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.EvaluationResultDetail';

    }

    export interface EvaluationResultDetailForm {
        ExamId: Serenity.IntegerEditor;
        EvaluationItemId: Serenity.IntegerEditor;
        InputContent: Serenity.StringEditor;
    }

    [['ExamId', () => Serenity.IntegerEditor], ['EvaluationItemId', () => Serenity.IntegerEditor], ['InputContent', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(EvaluationResultDetailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

