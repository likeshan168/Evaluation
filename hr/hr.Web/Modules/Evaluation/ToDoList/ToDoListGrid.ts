
namespace hr.Evaluation {
    
    @Serenity.Decorators.registerClass()
    export class ToDoListGrid extends Serenity.EntityGrid<ToDoListRow, any> {
        protected getColumnsKey() { return 'Evaluation.ToDoList'; }
        protected getDialogType() { return ToDoListDialog; }
        protected getIdProperty() { return ToDoListRow.idProperty; }
        protected getLocalTextPrefix() { return ToDoListRow.localTextPrefix; }
        protected getService() { return ToDoListService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}