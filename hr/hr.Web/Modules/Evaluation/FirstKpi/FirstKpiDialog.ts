
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class FirstKpiDialog extends Serenity.EntityDialog<FirstKpiRow, any> {
        protected getFormKey() { return FirstKpiForm.formKey; }
        protected getIdProperty() { return FirstKpiRow.idProperty; }
        protected getLocalTextPrefix() { return FirstKpiRow.localTextPrefix; }
        protected getNameProperty() { return FirstKpiRow.nameProperty; }
        protected getService() { return FirstKpiService.baseUrl; }

        protected form = new FirstKpiForm(this.idPrefix);

    }
}