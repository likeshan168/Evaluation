
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
    }
}