
namespace hr.Evaluation {
    
    @Serenity.Decorators.registerClass()
    export class UserToUserViewGrid extends Serenity.EntityGrid<UserToUserViewRow, any> {
        protected getColumnsKey() { return 'Evaluation.UserToUserView'; }
        protected getDialogType() { return UserToUserViewDialog; }
        protected getLocalTextPrefix() { return UserToUserViewRow.localTextPrefix; }
        protected getService() { return UserToUserViewService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}