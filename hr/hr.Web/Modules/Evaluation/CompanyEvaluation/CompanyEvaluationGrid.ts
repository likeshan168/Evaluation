
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

        //protected getColumns() {
        //    var columns = super.getColumns();
        //    columns.unshift({
        //        field: 'Delete Row',
        //        name: '',
        //        format: ctx => '<a class="inline-action delete-row" title="delete">' +
        //            '<i class="fa fa-trash-o text-red"></i></a>',
        //        width: 24,
        //        minWidth: 24,
        //        maxWidth: 24
        //    });

        //    return columns;
        //}

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('delete-row')) {
                    Q.confirm('Delete record?', () => {
                        Evaluation.CompanyEvaluationService.Delete({
                            EntityId: item.CompanyEvaluationId,
                        }, response => {
                            this.refresh();
                        });
                    });
                }
            }
        }

        protected getQuickFilters() {
            let filters = super.getQuickFilters();
            if (Authorization.userDefinition.IsAdmin) {
                return filters;
            }
            if (Authorization.hasPermission("Evaluation:Users:LookupScript") && !Authorization.hasPermission("Administration:Security")) {
                let fld = CompanyEvaluationRow.Fields;
                if (Authorization.userDefinition.DepartmentId) {
                    Q.first(filters, x => x.field === fld.DepartmentId).init = w => {
                        let editor = w as Serenity.LookupEditor;

                        editor.value = Authorization.userDefinition.DepartmentId.toString();
                        editor.element.attr("disabled", "disabled");
                    }
                    return filters.filter(x => x.field !== fld.UserId);
                }
            }

            return filters
        }
    }
}