
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class LeaderShipDialog extends Serenity.EntityDialog<LeaderShipRow, any> {
        protected getFormKey() { return LeaderShipForm.formKey; }
        protected getIdProperty() { return LeaderShipRow.idProperty; }
        protected getLocalTextPrefix() { return LeaderShipRow.localTextPrefix; }
        protected getService() { return LeaderShipService.baseUrl; }

        protected form: LeaderShipForm;

        constructor() {
            super();
            this.form = new LeaderShipForm(this.idPrefix);
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            if (!this.isNew)
                Serenity.EditorUtils.setReadOnly(this.form.UserId, true);
        }

    }
}