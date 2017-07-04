
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ExamDialog extends Serenity.EntityDialog<ExamRow, any> {
        protected getFormKey() { return ExamForm.formKey; }
        protected getIdProperty() { return ExamRow.idProperty; }
        protected getLocalTextPrefix() { return ExamRow.localTextPrefix; }
        protected getNameProperty() { return ExamRow.nameProperty; }
        protected getService() { return ExamService.baseUrl; }

        protected form = new ExamForm(this.idPrefix);


        protected afterLoadEntity() {
            $("[name='EvaluationIds']").click(() => {
                (new ExamListDialog()).dialogOpen();
            });
            
        }
    }
}