namespace hr.Evaluation {
    export class EvaluationItemForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.EvaluationItem';

    }

    export interface EvaluationItemForm {
        FirstKpiId: Serenity.LookupEditor;
        SecondKpiId: Serenity.LookupEditor;
        Content: Serenity.TextAreaEditor;
        ContentType: Serenity.EnumEditor;
        Score: Serenity.IntegerEditor;
        Mark: Serenity.TextAreaEditor;
        IsEnabled: Serenity.BooleanEditor;
        IsSelfEvaluation: Serenity.BooleanEditor;
        OrderNo: Serenity.IntegerEditor;
        Remark: Serenity.StringEditor;
    }

    [['FirstKpiId', () => Serenity.LookupEditor], ['SecondKpiId', () => Serenity.LookupEditor], ['Content', () => Serenity.TextAreaEditor], ['ContentType', () => Serenity.EnumEditor], ['Score', () => Serenity.IntegerEditor], ['Mark', () => Serenity.TextAreaEditor], ['IsEnabled', () => Serenity.BooleanEditor], ['IsSelfEvaluation', () => Serenity.BooleanEditor], ['OrderNo', () => Serenity.IntegerEditor], ['Remark', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(EvaluationItemForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

