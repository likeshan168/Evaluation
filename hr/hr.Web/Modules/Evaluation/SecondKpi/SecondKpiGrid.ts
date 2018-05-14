
namespace hr.Evaluation {
    
    @Serenity.Decorators.registerClass()
    export class SecondKpiGrid extends Serenity.EntityGrid<SecondKpiRow, any> {
        protected getColumnsKey() { return 'Evaluation.SecondKpi'; }
        protected getDialogType() { return SecondKpiDialog; }
        protected getIdProperty() { return SecondKpiRow.idProperty; }
        protected getLocalTextPrefix() { return SecondKpiRow.localTextPrefix; }
        protected getService() { return SecondKpiService.baseUrl; }

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
    }
}