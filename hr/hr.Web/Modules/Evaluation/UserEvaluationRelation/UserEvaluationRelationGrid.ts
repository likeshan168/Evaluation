
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    export class UserEvaluationRelationGrid extends Serenity.EntityGrid<UserEvaluationRelationRow, any> {
        protected getColumnsKey() { return 'Evaluation.UserEvaluationRelation'; }
        protected getDialogType() { return UserEvaluationRelationDialog; }
        protected getIdProperty() { return UserEvaluationRelationRow.idProperty; }
        protected getLocalTextPrefix() { return UserEvaluationRelationRow.localTextPrefix; }
        protected getService() { return UserEvaluationRelationService.baseUrl; }
        public rowSelection: Serenity.GridRowSelectionMixin;
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }
        constructor(container: JQuery) {
            super(container);
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

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.push({
                title: '发送邮件',
                cssClass: 'outlook-button',
                onClick: () => {
                    let selectedKeys = this.rowSelection.getSelectedKeys();
                    console.log(selectedKeys);
                    if (selectedKeys.length == 0) {
                        //this.rowSelection.selectKeys(["1", "2"]);
                        Q.alert("请选择需要发送邮件的被考核人");
                        return;
                    } else {
                        let grid = this as Serenity.IDataGrid;
                        let view = grid.getView();
                        let users = [];
                        let user;
                        selectedKeys.forEach((value, index) => {
                            user = grid.getView().getItemById(value);
                            users.push({ "UserId": user.UserId, "ExamId": user.ExamId });
                        });
                        UserEvaluationRelationService.BatchSendEmail({
                            Users:users
                        }, response => {
                            Q.notifySuccess("邮件已发送");
                        });
                    }
                }
            });

            // add our import button
            buttons.push({
                title: '导入Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    // open import dialog, let it handle rest
                    var dialog = new UserEvaluationRelationExcelImportDialog();
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                },
                separator: true
            });
            buttons.push({
                title: '删除选中项',
                cssClass: 'delete-button',
                separator: true,
                onClick: () => {
                    let selectedKeys = this.rowSelection.getSelectedKeys();
                    if (selectedKeys.length === 0) {
                        Q.alert("请选择要删除的项");
                        return;
                    }
                    Q.confirm("确认要删除选中项吗", () => {
                        let ids = [];
                        selectedKeys.forEach((value, index) => {
                            ids.push(parseInt(value));
                        });
                        UserEvaluationRelationService.BatchDelete({
                            Ids: ids
                        }, response => {
                            Q.notifySuccess("删除成功");
                            this.refresh();
                        })
                    });
                }
            });

            buttons.push({
                title: '下载模板',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    Q.postToService({
                        service: UserEvaluationRelationService.baseUrl + '/ExcelTemplate',
                        request: null,
                        target: '_blank'
                    });
                },
                separator: true
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
                    Q.confirm('删除该条记录吗?', () => {
                        Evaluation.UserEvaluationRelationService.Delete({
                            EntityId: item.Id,
                        }, response => {
                            this.refresh();
                        });
                    });
                }
            }
        }

        //protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

        //    // get quick filter list from base class
        //    let filters = super.getQuickFilters();

        //    console.log(filters);
        //    let fld = UserEvaluationRelationRow.Fields;
        //    Q.first(filters, x => x.field == fld.ExamId).init = w => {
        //        console.log((w as Serenity.StringEditor).value);
        //    };

        //    return filters;
        //}
    }
}