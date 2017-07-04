
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SecondKpiDialog extends Serenity.EntityDialog<SecondKpiRow, any> {
        protected getFormKey() { return SecondKpiForm.formKey; }
        protected getIdProperty() { return SecondKpiRow.idProperty; }
        protected getLocalTextPrefix() { return SecondKpiRow.localTextPrefix; }
        protected getNameProperty() { return SecondKpiRow.nameProperty; }
        protected getService() { return SecondKpiService.baseUrl; }

        protected form = new SecondKpiForm(this.idPrefix);

    }
}