namespace hr.Evaluation {
    export class DepartmentForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.Department';

    }

    export interface DepartmentForm {
        Name: Serenity.StringEditor;
        Remark: Serenity.StringEditor;
    }

    [['Name', () => Serenity.StringEditor], ['Remark', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(DepartmentForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

