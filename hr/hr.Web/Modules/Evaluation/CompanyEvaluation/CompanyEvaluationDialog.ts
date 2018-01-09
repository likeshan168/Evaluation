
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CompanyEvaluationDialog extends Serenity.EntityDialog<CompanyEvaluationRow, any> {
        protected getFormKey() { return CompanyEvaluationForm.formKey; }
        protected getIdProperty() { return CompanyEvaluationRow.idProperty; }
        protected getLocalTextPrefix() { return CompanyEvaluationRow.localTextPrefix; }
        protected getService() { return CompanyEvaluationService.baseUrl; }

        protected form = new CompanyEvaluationForm(this.idPrefix);

    }
}