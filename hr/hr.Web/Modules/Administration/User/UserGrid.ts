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

        //protected getColumns() {
        //    var columns = super.getColumns();

        //    columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));

        //    return columns;
        //}
        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.push({
                title: '分配角色',
                //cssClass: 'btn btn-danger',
                icon:'icon-lock',
                onClick: () => {
                    let selectedKeys = this.rowSelection.getSelectedKeys();
                    if (selectedKeys.length == 0) {
                        Q.alert("请选择需要分配角色的用户");
                        return;
                    }
                    let userIds = selectedKeys.map(p => parseInt(p, 10));
                    let grid = this;
                    new ChooseRoleDialog({
                        userIDs: userIds,
                        userGrid: grid
                    }).dialogOpen();
                }
            });
            buttons.push({
                title: '批量重置密码',
                //cssClass: 'btn btn-danger',
                icon: 'fa fa-key',
                onClick: () => {
                    let selectedKeys = this.rowSelection.getSelectedKeys();
                    if (selectedKeys.length === 0) {
                        Q.alert("请选择需要重置密码的用户");
                        return;
                    }
                    let userIds = selectedKeys.map(p => parseInt(p, 10));
                    UserService.BatchUpdate({ Userids: userIds },
                        () => {
                            Q.notifySuccess("密码已经重置");
                        });
                    //let grid = this;
                    //new ChooseRoleDialog({
                    //    userIDs: userIds,
                    //    userGrid: grid
                    //}).dialogOpen();
                }
            });
            return buttons;
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.unshift({
                field: 'Delete Row',
                name: '',
                format: ctx => '<a class="inline-action delete-row" title="delete">' +
                    '<i class="fa fa-trash-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            return columns;
        }

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
                        Administration.UserService.Delete({
                            EntityId: item.UserId,
                        }, response => {
                            this.refresh();
                        });
                    });
                }
            }
        }

        protected getDefaultSortBy() {
            return [UserRow.Fields.Username];
        }
    }
}