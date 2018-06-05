
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
            buttons.push(Common.ExcelExportHelper.createToolButton({
                title: '导出考核明细',
                hint: '导出考核明细',
                grid: this,
                service: EvaluationFinalResultService.baseUrl + '/ListDetailExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));
            //buttons.push({
            //    title: '一键归档',
            //    cssClass: 'add-file-button',
            //    onClick: () => {

            //    }
            //});
            //buttons.push(Common.ExcelExportHelper.createToolButton({
            //    title: '导出自我评价',
            //    hint: '导出自我评价',
            //    grid: this,
            //    service: EvaluationFinalResultService.baseUrl + '/ListSelfEvaluationExcel',
            //    onViewSubmit: () => this.onViewSubmit(),
            //    separator: true
            //}));
            return buttons;
        }

        protected getColumns() {
            //super.getQuickFilters();
            var columns = super.getColumns();
            let flds = EvaluationFinalResultRow.Fields;
            let index = 0;
            Q.first(columns, x => x.field === flds.UserName)
                .format = (ctx) => {
                    //TODO: 考虑过期的情况
                    return `<a href='#' class='check_detail'>${ctx.value}</a>`
                }
            return columns;
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

        protected onClick(e: JQueryEventObject, row: number, cell: number) {

            var target = $(e.target);
            let rst = this.itemAt(row);
            if (target.hasClass("check_detail")) {
                new EvaluationFinalResultDetail(rst.UserId, rst.ExamId).dialogOpen();
            }
        }

        protected getQuickFilters() {
            let filters = super.getQuickFilters();
            if (Authorization.userDefinition.IsAdmin) {
                return filters;
            }
            if (Authorization.hasPermission("Evaluation:Users:LookupScript") && !Authorization.hasPermission("Administration:Security")) {
                let fld = EvaluationFinalResultRow.Fields;
                if (Authorization.userDefinition.DepartmentName) {
                    Q.first(filters, x => x.field === fld.DepartmentName).init = w => {
                        let editor = w as Serenity.LookupEditor;

                        editor.value = Authorization.userDefinition.DepartmentName.toString();
                        editor.element.attr("disabled", "disabled");
                    }
                    return filters.filter(x => x.field !== fld.UserName);
                }
            }

            return filters
        }
    }
}