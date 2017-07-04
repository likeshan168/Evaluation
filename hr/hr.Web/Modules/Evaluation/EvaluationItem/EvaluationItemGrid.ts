
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    export class EvaluationItemGrid extends Serenity.EntityGrid<EvaluationItemRow, any> {
        protected getColumnsKey() { return 'Evaluation.EvaluationItem'; }
        protected getDialogType() { return EvaluationItemDialog; }
        protected getIdProperty() { return EvaluationItemRow.idProperty; }
        protected getLocalTextPrefix() { return EvaluationItemRow.localTextPrefix; }
        protected getService() { return EvaluationItemService.baseUrl; }

        public rowSelection: Serenity.GridRowSelectionMixin;
        constructor(container: JQuery) {
            super(container);
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.push({
                title: '按第一指标分组',
                cssClass: 'expand-all-button',

                onClick: () => {
                    this.view.setGrouping(
                        [{
                            formatter: x => '第一指标: ' + x.value + ' (' + x.count + ' 项)',
                            getter: 'FirstKpiName'
                        }]);
                }
            },
                {
                    title: '按第二指标分组',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(

                        [
                            {
                                formatter: x => '第一指标: ' + x.value + ' (' + x.count + ' 项)',
                                getter: 'FirstKpiName'
                            },
                            {
                                formatter: x => '第二指标: ' + x.value + ' (' + x.count + ' 项)',
                                getter: 'SecondKpiName'
                            }
                        ])
                },
                {
                    title: '不分组',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [])
                }
            );
            buttons.push({
                title: '删除选中项',
                //cssClass: 'btn btn-danger',
                onClick: () => {
                    let selectedKeys = this.rowSelection.getSelectedKeys();
                    if (selectedKeys.length == 0) {
                        this.rowSelection.selectKeys(["1", "2"]);
                    }
                    //console.log(this.rowSelection.getSelectedKeys();
                }
            });
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
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
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
            columns.splice(1, 0, {
                field: 'Copy',
                name: '',
                format: ctx => '<a class="inline-action copy-row" title="copy"><i class="fa fa-clone" aria-hidden="true"></i></a>',
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
                        Evaluation.EvaluationItemService.Delete({
                            EntityId: item.Id,
                        }, response => {
                            this.refresh();
                        });
                    });
                } else if (target.hasClass('copy-row')) {
                    var dialog = new EvaluationItemDialog();
                    this.initDialog(dialog);
                    dialog.loadEntityAndOpenDialog(<Evaluation.EvaluationItemRow>{
                        FirstKpiId: item.FirstKpiId,
                        SecondKpiId: item.SecondKpiId,
                        ContentType: item.ContentType,
                        Score: item.Score + 1,
                        IsEnabled: item.IsEnabled,
                        IsSelfEvaluation: item.IsSelfEvaluation,
                        OrderNo: item.OrderNo + 1
                    });
                }
            }
        }
    }
}