namespace hr.Evaluation {
    export class ScoreDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.ScoreDetail';

    }

    export interface ScoreDetailForm {
        EvaluationResultDetailId: Serenity.IntegerEditor;
        UserId: Serenity.IntegerEditor;
        Score: Serenity.IntegerEditor;
    }

    [['EvaluationResultDetailId', () => Serenity.IntegerEditor], ['UserId', () => Serenity.IntegerEditor], ['Score', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ScoreDetailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

