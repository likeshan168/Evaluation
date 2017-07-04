
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ToDoListDialog extends Serenity.EntityDialog<ToDoListRow, any> {
        protected getFormKey() { return ToDoListForm.formKey; }
        protected getIdProperty() { return ToDoListRow.idProperty; }
        protected getLocalTextPrefix() { return ToDoListRow.localTextPrefix; }
        protected getNameProperty() { return ToDoListRow.nameProperty; }
        protected getService() { return ToDoListService.baseUrl; }

        protected form = new ToDoListForm(this.idPrefix);

    }
}