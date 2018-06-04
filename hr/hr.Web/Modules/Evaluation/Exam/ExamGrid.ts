
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    export class ExamGrid extends Serenity.EntityGrid<ExamRow, any> {
        protected getColumnsKey() { return 'Evaluation.Exam'; }
        protected getDialogType() { return ExamDialog; }
        protected getIdProperty() { return ExamRow.idProperty; }
        protected getLocalTextPrefix() { return ExamRow.localTextPrefix; }
        protected getService() { return ExamService.baseUrl; }

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
            let now = new Date();
            let endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3);
            this.editItem(<Evaluation.ExamRow>{
                StartDate: Q.formatDate(now, 'yyyy-MM-dd'),
                EndDate: Q.formatDate(endDate, 'yyyy-MM-dd'),
                IsEnabled: true
            });
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

            if (target.is('.check-box')) {
                return;
            }
            if (item) {
                e.preventDefault();
                let checkBox = target.closest('.slick-row').find('.check-box');
                if (!checkBox.hasClass("checked")) {
                    this.rowSelection.clear();
                    checkBox.click();
                }
            }

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('delete-row')) {
                    Q.confirm('确认删除该条记录吗?如果删除，则配置过该考核内容的考核关系也会被删除', () => {
                        Evaluation.ExamService.Delete({
                            EntityId: item.Id,
                        }, response => {
                            this.refresh();
                        });
                    });
                }
            }
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.push({
                title: '一键归档',
                cssClass: 'add-file-button',
                onClick: () => {
                    let selectedKeys = this.rowSelection.getSelectedKeys();
                    if (selectedKeys.length == 0) {
                        Q.alert("请选择需要归档的考核");
                    } else if (selectedKeys.length > 1) {
                        Q.alert("一次只能选择一条记录");
                    } else {
                        Q.confirm("确认要归档选中的考核吗", () => {
                            let item = this.view.getItemById(selectedKeys[0]);
                            ExamService.Archive({
                                ExamId: item.Id,
                                Title: item.Title
                            }, response => {
                                Q.notifySuccess("归档成功！");
                                this.refresh();
                            });
                        });
                    }
                }
            });

            return buttons;
        }
    }
}