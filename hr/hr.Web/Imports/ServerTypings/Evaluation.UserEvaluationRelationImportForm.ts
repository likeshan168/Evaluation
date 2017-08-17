namespace hr.Evaluation {
    export class UserEvaluationRelationImportForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.UserEvaluationRelationExcelImport';

    }

    export interface UserEvaluationRelationImportForm {
        ExamId: Serenity.LookupEditor;
        FileName: Serenity.ImageUploadEditor;
    }

    [['ExamId', () => Serenity.LookupEditor], ['FileName', () => Serenity.ImageUploadEditor]].forEach(x => Object.defineProperty(UserEvaluationRelationImportForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

