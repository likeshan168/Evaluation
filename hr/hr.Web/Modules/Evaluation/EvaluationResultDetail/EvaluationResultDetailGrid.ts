
namespace hr.Evaluation {
    
    @Serenity.Decorators.registerClass()
    export class EvaluationResultDetailGrid extends Serenity.EntityGrid<EvaluationResultDetailRow, any> {
        protected getColumnsKey() { return 'Evaluation.EvaluationResultDetail'; }
        protected getDialogType() { return EvaluationResultDetailDialog; }
        protected getIdProperty() { return EvaluationResultDetailRow.idProperty; }
        protected getLocalTextPrefix() { return EvaluationResultDetailRow.localTextPrefix; }
        protected getService() { return EvaluationResultDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}