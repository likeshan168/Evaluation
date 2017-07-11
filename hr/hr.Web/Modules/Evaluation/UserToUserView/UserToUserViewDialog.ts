
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class UserToUserViewDialog extends Serenity.EntityDialog<UserToUserViewRow, any> {
        protected getFormKey() { return UserToUserViewForm.formKey; }
        protected getLocalTextPrefix() { return UserToUserViewRow.localTextPrefix; }
        protected getService() { return UserToUserViewService.baseUrl; }

        protected form = new UserToUserViewForm(this.idPrefix);

    }
}