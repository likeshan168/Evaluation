
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class UserEvaluationRelationDialog extends Serenity.EntityDialog<UserEvaluationRelationRow, any> {
        protected getFormKey() { return UserEvaluationRelationForm.formKey; }
        protected getIdProperty() { return UserEvaluationRelationRow.idProperty; }
        protected getLocalTextPrefix() { return UserEvaluationRelationRow.localTextPrefix; }
        protected getNameProperty() { return UserEvaluationRelationRow.nameProperty; }
        protected getService() { return UserEvaluationRelationService.baseUrl; }

        protected form = new UserEvaluationRelationForm(this.idPrefix);

        //protected afterLoadEntity() {
        //    $("[name='EvaluationUserIds']").click(() => {
        //        (new UserListDialog()).dialogOpen();
        //    });

        //}
    }
}