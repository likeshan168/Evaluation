
namespace hr.Evaluation {
    
    @Serenity.Decorators.registerClass()
    export class UserEvaluationRelationGrid extends Serenity.EntityGrid<UserEvaluationRelationRow, any> {
        protected getColumnsKey() { return 'Evaluation.UserEvaluationRelation'; }
        protected getDialogType() { return UserEvaluationRelationDialog; }
        protected getIdProperty() { return UserEvaluationRelationRow.idProperty; }
        protected getLocalTextPrefix() { return UserEvaluationRelationRow.localTextPrefix; }
        protected getService() { return UserEvaluationRelationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
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
    }
}