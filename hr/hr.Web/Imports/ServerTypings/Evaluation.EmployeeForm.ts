namespace hr.Evaluation {
    export class EmployeeForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.Employee';

    }

    export interface EmployeeForm {
        Name: Serenity.StringEditor;
        IdCard: Serenity.StringEditor;
        Gender: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        Email: Serenity.StringEditor;
        DepartmentId: Serenity.LookupEditor;
        Remark: Serenity.StringEditor;
    }

    [['Name', () => Serenity.StringEditor], ['IdCard', () => Serenity.StringEditor], ['Gender', () => Serenity.StringEditor], ['BirthDate', () => Serenity.DateEditor], ['Email', () => Serenity.StringEditor], ['DepartmentId', () => Serenity.LookupEditor], ['Remark', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(EmployeeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

