namespace hr.Evaluation {
    export class SecondKpiForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.SecondKpi';

    }

    export interface SecondKpiForm {
        FirstKpiId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        OrderNo: Serenity.IntegerEditor;
        Remark: Serenity.StringEditor;
    }

    [['FirstKpiId', () => Serenity.LookupEditor], ['Name', () => Serenity.StringEditor], ['OrderNo', () => Serenity.IntegerEditor], ['Remark', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SecondKpiForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

