

namespace hr.Evaluation {
    export class UserEvaluationToUserForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.UserEvaluationToUser';
    }

    export interface UserEvaluationToUserForm {
        UserEvaluationRelationId: Serenity.IntegerEditor;
        UserId: Serenity.IntegerEditor;
    }

    [['UserEvaluationRelationId', () => Serenity.IntegerEditor], ['UserId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(UserEvaluationToUserForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}