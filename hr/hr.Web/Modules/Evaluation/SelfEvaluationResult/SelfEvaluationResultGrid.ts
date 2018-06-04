
namespace hr.Evaluation {
    
    @Serenity.Decorators.registerClass()
    export class SelfEvaluationResultGrid extends Serenity.EntityGrid<SelfEvaluationResultRow, any> {
        protected getColumnsKey() { return 'Evaluation.SelfEvaluationResult'; }
        //protected getDialogType() { return SelfEvaluationResultDialog; }
        protected getLocalTextPrefix() { return SelfEvaluationResultRow.localTextPrefix; }
        protected getService() { return SelfEvaluationResultService.baseUrl; }
        protected getIdProperty() { return SelfEvaluationResultRow.idProperty; }

        public rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery) {
            super(container);
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
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
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
            grid.setSelectionModel(new Slick.RowSelectionModel());
            return grid;
        }

        protected getButtons() {
            let buttons = super.getButtons();
            buttons = buttons.filter(x=>x.cssClass!=='add-button');
            buttons.push(Common.ExcelExportHelper.createToolButton({
                title: '导出Excel',
                hint: '导出Excel',
                grid: this,
                service: SelfEvaluationResultService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));
            return buttons;
        }

        protected getQuickFilters() {
            let filters = super.getQuickFilters();
            if (Authorization.hasPermission("Evaluation:Users:LookupScript") && !Authorization.hasPermission("Administration:Security")) {
                let fld = SelfEvaluationResultRow.Fields;
                Q.first(filters, x => x.field === fld.DepartmentName).init = w => {
                    let editor = w as Serenity.LookupEditor;
                    
                    editor.value = Authorization.userDefinition.DepartmentName.toString();
                    editor.element.attr("disabled","disabled");
                }
                return filters.filter(x => x.field !== fld.Username);
            }

            return filters
        }
    }
}