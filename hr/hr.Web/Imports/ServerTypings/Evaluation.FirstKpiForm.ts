namespace hr.Evaluation {
    export class FirstKpiForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.FirstKpi';

    }

    export interface FirstKpiForm {
        OrderNo: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Remark: Serenity.StringEditor;
    }

    [['OrderNo', () => Serenity.IntegerEditor], ['Name', () => Serenity.StringEditor], ['Remark', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(FirstKpiForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

