
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EvaluationResultDialog extends Serenity.EntityDialog<EvaluationResultRow, any> {
        protected getFormKey() { return EvaluationResultForm.formKey; }
        protected getIdProperty() { return EvaluationResultRow.idProperty; }
        protected getLocalTextPrefix() { return EvaluationResultRow.localTextPrefix; }
        protected getService() { return EvaluationResultService.baseUrl; }

        protected form = new EvaluationResultForm(this.idPrefix);

    }
}