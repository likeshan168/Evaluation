
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class DepartmentDialog extends Serenity.EntityDialog<DepartmentRow, any> {
        protected getFormKey() { return DepartmentForm.formKey; }
        protected getIdProperty() { return DepartmentRow.idProperty; }
        protected getLocalTextPrefix() { return DepartmentRow.localTextPrefix; }
        protected getNameProperty() { return DepartmentRow.nameProperty; }
        protected getService() { return DepartmentService.baseUrl; }

        protected form = new DepartmentForm(this.idPrefix);

        //dialogOpen() {
        //    super.dialogOpen();
        //    this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        //}
    }
}