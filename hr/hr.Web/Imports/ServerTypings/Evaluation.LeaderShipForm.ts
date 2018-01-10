namespace hr.Evaluation {
    export class LeaderShipForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.LeaderShip';

    }

    export interface LeaderShipForm {
        UserId: Serenity.LookupEditor;
        ParentUserId: Serenity.LookupEditor;
    }

    [['UserId', () => Serenity.LookupEditor], ['ParentUserId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(LeaderShipForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

