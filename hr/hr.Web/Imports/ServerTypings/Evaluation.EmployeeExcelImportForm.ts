namespace hr.Evaluation {
    export class EmployeeExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.EmployeeExcelImport';

    }

    export interface EmployeeExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    [['FileName', () => Serenity.ImageUploadEditor]].forEach(x => Object.defineProperty(EmployeeExcelImportForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

