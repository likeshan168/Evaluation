
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    export class ExamGrid extends Serenity.EntityGrid<ExamRow, any> {
        protected getColumnsKey() { return 'Evaluation.Exam'; }
        protected getDialogType() { return ExamDialog; }
        protected getIdProperty() { return ExamRow.idProperty; }
        protected getLocalTextPrefix() { return ExamRow.localTextPrefix; }
        protected getService() { return ExamService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected addButtonClick() {
            let now = new Date();
            let endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3);
            this.editItem(<Evaluation.ExamRow>{
                StartDate: Q.formatDate(now, 'yyyy-MM-dd'),
                EndDate: Q.formatDate(endDate, 'yyyy-MM-dd'),
                IsEnabled: true
            });
        }
    }
}