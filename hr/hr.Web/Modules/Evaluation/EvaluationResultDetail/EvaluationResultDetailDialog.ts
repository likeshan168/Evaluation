
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EvaluationResultDetailDialog extends Serenity.EntityDialog<EvaluationResultDetailRow, any> {
        protected getFormKey() { return EvaluationResultDetailForm.formKey; }
        protected getIdProperty() { return EvaluationResultDetailRow.idProperty; }
        protected getLocalTextPrefix() { return EvaluationResultDetailRow.localTextPrefix; }
        protected getNameProperty() { return EvaluationResultDetailRow.nameProperty; }
        protected getService() { return EvaluationResultDetailService.baseUrl; }

        protected form = new EvaluationResultDetailForm(this.idPrefix);

    }
}