namespace hr.Administration {

    @Serenity.Decorators.registerClass()
    export class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey() { return "Administration.User"; }
        protected getDialogType() { return UserDialog; }
        protected getIdProperty() { return UserRow.idProperty; }
        protected getIsActiveProperty() { return UserRow.isActiveProperty; }
        protected getLocalTextPrefix() { return UserRow.localTextPrefix; }
        protected getService() { return UserService.baseUrl; }

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

        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));

            return columns;
        }

        protected getDefaultSortBy() {
            return [UserRow.Fields.Username];
        }
    }
}