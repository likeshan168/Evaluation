
namespace hr.Evaluation {
    
    @Serenity.Decorators.registerClass()
    export class DepartmentGrid extends Serenity.EntityGrid<DepartmentRow, any> {
        protected getColumnsKey() { return 'Evaluation.Department'; }
        protected getDialogType() { return DepartmentDialog; }
        protected getIdProperty() { return DepartmentRow.idProperty; }
        protected getLocalTextPrefix() { return DepartmentRow.localTextPrefix; }
        protected getService() { return DepartmentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}