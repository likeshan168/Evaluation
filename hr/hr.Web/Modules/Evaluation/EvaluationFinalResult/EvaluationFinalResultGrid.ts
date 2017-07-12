
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    export class EvaluationFinalResultGrid extends Serenity.EntityGrid<EvaluationFinalResultRow, any> {
        protected getColumnsKey() { return 'Evaluation.EvaluationFinalResult'; }
        //protected getDialogType() { return EvaluationFinalResultDialog; }
        protected getLocalTextPrefix() { return EvaluationFinalResultRow.localTextPrefix; }
        protected getService() { return EvaluationFinalResultService.baseUrl; }
        protected getIdProperty() { return DepartmentRow.idProperty; }


        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.push(Common.ExcelExportHelper.createToolButton({
                title: '导出Excel',
                hint: '导出Excel',
                grid: this,
                service: EvaluationFinalResultService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));
            return buttons;
        }

    }
}