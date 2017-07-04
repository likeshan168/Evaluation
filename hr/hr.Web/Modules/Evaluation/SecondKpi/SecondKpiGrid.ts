
namespace hr.Evaluation {
    
    @Serenity.Decorators.registerClass()
    export class SecondKpiGrid extends Serenity.EntityGrid<SecondKpiRow, any> {
        protected getColumnsKey() { return 'Evaluation.SecondKpi'; }
        protected getDialogType() { return SecondKpiDialog; }
        protected getIdProperty() { return SecondKpiRow.idProperty; }
        protected getLocalTextPrefix() { return SecondKpiRow.localTextPrefix; }
        protected getService() { return SecondKpiService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}