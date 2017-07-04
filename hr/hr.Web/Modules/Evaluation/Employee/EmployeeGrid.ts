
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    export class EmployeeGrid extends Serenity.EntityGrid<EmployeeRow, any> {
        protected getColumnsKey() { return 'Evaluation.Employee'; }
        protected getDialogType() { return EmployeeDialog; }
        protected getIdProperty() { return EmployeeRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeRow.localTextPrefix; }
        protected getService() { return EmployeeService.baseUrl; }

        public rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery) {
            super(container);
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        protected getButtons(): Serenity.ToolButton[] {
            // call base method to get list of buttons
            var buttons = super.getButtons();
            // add our export button
            buttons.push(Common.ExcelExportHelper.createToolButton({
                title: '导出Excel',
                hint: '导出Excel',
                grid: this,
                service: EmployeeService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));
            // add our import button
            buttons.push({
                title: '导入Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    // open import dialog, let it handle rest
                    var dialog = new EmployeeExcelImportDialog();
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                },
                separator: true
            });

            buttons.push({
                title: "添加为系统用户",
                onClick: () => {
                    let selectedKeys = this.rowSelection.getSelectedKeys();
                    if (selectedKeys.length == 0) {
                        Q.warning("请选择要添加的员工");
                        return;
                    }

                    Q.serviceCall({
                        url: Q.resolveUrl("~/Services/Evaluation/Employee/AddEmployeeToUsers"),
                        request: {
                            Ids: selectedKeys
                        },
                        onSuccess: response => {
                            Q.information(Q.text('Success!'), () => {
                                window.location.href = Q.resolveUrl('~/Administration/User');
                            });

                        }
                    })
                }
            })

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
            //grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
            grid.setSelectionModel(new Slick.RowSelectionModel());
            return grid;
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
                        Evaluation.EmployeeService.Delete({
                            EntityId: item.Id,
                        }, response => {
                            this.refresh();
                        });
                    });
                }
            }
        }

    }
}