
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class LeaderShipDialog extends Serenity.EntityDialog<LeaderShipRow, any> {
        protected getFormKey() { return LeaderShipForm.formKey; }
        protected getIdProperty() { return LeaderShipRow.idProperty; }
        protected getLocalTextPrefix() { return LeaderShipRow.localTextPrefix; }
        protected getService() { return LeaderShipService.baseUrl; }

        protected form = new LeaderShipForm(this.idPrefix);

    }
}