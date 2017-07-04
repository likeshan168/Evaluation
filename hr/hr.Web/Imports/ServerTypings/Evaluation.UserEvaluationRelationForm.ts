namespace hr.Evaluation {
    export class UserEvaluationRelationForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.UserEvaluationRelation';

    }

    export interface UserEvaluationRelationForm {
        UserId: Serenity.LookupEditor;
        UserList: Serenity.LookupEditor;
        ExamId: Serenity.LookupEditor;
        Remark: Serenity.StringEditor;
    }

    [['UserId', () => Serenity.LookupEditor], ['UserList', () => Serenity.LookupEditor], ['ExamId', () => Serenity.LookupEditor], ['Remark', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(UserEvaluationRelationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

