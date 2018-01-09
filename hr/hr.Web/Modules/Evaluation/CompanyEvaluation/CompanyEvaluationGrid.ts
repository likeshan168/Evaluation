
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    export class CompanyEvaluationGrid extends Serenity.EntityGrid<CompanyEvaluationRow, any> {
        protected getColumnsKey() { return 'Evaluation.CompanyEvaluation'; }
        protected getDialogType() { return CompanyEvaluationDialog; }
        protected getIdProperty() { return CompanyEvaluationRow.idProperty; }
        protected getLocalTextPrefix() { return CompanyEvaluationRow.localTextPrefix; }
        protected getService() { return CompanyEvaluationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            let buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "add-button"), 1);
            buttons.push(Common.ExcelExportHelper.createToolButton({
                title: '导出Excel',
                hint: '导出Excel',
                grid: this,
                service: CompanyEvaluationService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));
            return buttons;
        }

        protected getSlickOptions(): Slick.GridOptions {
            var opt = super.getSlickOptions();
            opt.enableTextSelectionOnCells = true;
            opt.selectedCellCssClass = "slick-row-selected";
            opt.enableCellNavigation = true;
            return opt;
        }

        protected createSlickGrid(): Slick.Grid {
            var grid = super.createSlickGrid();
            grid.setSelectionModel(new Slick.RowSelectionModel());
            return grid;
        }
    }
}