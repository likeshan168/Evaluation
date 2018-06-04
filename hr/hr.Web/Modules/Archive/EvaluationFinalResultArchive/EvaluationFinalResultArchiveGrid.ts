
namespace hr.Archive {
    
    @Serenity.Decorators.registerClass()
    export class EvaluationFinalResultArchiveGrid extends Serenity.EntityGrid<EvaluationFinalResultArchiveRow, any> {
        protected getColumnsKey() { return 'Archive.EvaluationFinalResultArchive'; }
        //protected getDialogType() { return EvaluationFinalResultArchiveDialog; }
        protected getIdProperty() { return EvaluationFinalResultArchiveRow.idProperty; }
        protected getLocalTextPrefix() { return EvaluationFinalResultArchiveRow.localTextPrefix; }
        protected getService() { return EvaluationFinalResultArchiveService.baseUrl; }

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
            return buttons.filter(x=>x.cssClass!=='add-button');
        }
    }
}