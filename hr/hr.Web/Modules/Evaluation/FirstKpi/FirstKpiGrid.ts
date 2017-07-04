
namespace hr.Evaluation {
    
    @Serenity.Decorators.registerClass()
    export class FirstKpiGrid extends Serenity.EntityGrid<FirstKpiRow, any> {
        protected getColumnsKey() { return 'Evaluation.FirstKpi'; }
        protected getDialogType() { return FirstKpiDialog; }
        protected getIdProperty() { return FirstKpiRow.idProperty; }
        protected getLocalTextPrefix() { return FirstKpiRow.localTextPrefix; }
        protected getService() { return FirstKpiService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}