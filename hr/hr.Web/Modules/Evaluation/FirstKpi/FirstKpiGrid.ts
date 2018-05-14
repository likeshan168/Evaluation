
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    export class FirstKpiGrid extends Serenity.EntityGrid<FirstKpiRow, any> {
        protected getColumnsKey() { return 'Evaluation.FirstKpi'; }
        protected getDialogType() { return FirstKpiDialog; }
        protected getIdProperty() { return FirstKpiRow.idProperty; }
        protected getLocalTextPrefix() { return FirstKpiRow.localTextPrefix; }
        protected getService() { return FirstKpiService.baseUrl; }

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

        protected addButtonClick() {
            this.editItem(<FirstKpiRow>{
                OrderNo: this.getMax(this.getItems()) + 1
            });
        }

        private getMax(arr: FirstKpiRow[]): number {
            let tmp = arr.map(p => p.OrderNo);
            let max = tmp[0];
            for (let i = 1; i < tmp.length; i++) {
                if (max < tmp[i]) {
                    max = tmp[i];
                }
            }

            return max;
        }
    }
}