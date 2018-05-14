namespace hr.Evaluation {
    export class SelfEvaluationRecordForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.SelfEvaluationRecord';

    }

    export interface SelfEvaluationRecordForm {
        UserId: Serenity.IntegerEditor;
        ExamId: Serenity.IntegerEditor;
        EvaluationDate: Serenity.DateEditor;
        IsSelfEvaluated: Serenity.BooleanEditor;
    }

    [['UserId', () => Serenity.IntegerEditor], ['ExamId', () => Serenity.IntegerEditor], ['EvaluationDate', () => Serenity.DateEditor], ['IsSelfEvaluated', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(SelfEvaluationRecordForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

