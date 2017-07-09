
namespace hr.Evaluation {
    
    @Serenity.Decorators.registerClass()
    export class ScoreDetailGrid extends Serenity.EntityGrid<ScoreDetailRow, any> {
        protected getColumnsKey() { return 'Evaluation.ScoreDetail'; }
        protected getDialogType() { return ScoreDetailDialog; }
        protected getIdProperty() { return ScoreDetailRow.idProperty; }
        protected getLocalTextPrefix() { return ScoreDetailRow.localTextPrefix; }
        protected getService() { return ScoreDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}