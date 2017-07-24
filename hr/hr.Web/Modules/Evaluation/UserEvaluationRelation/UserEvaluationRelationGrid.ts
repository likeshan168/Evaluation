
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

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.push({
                title: '发送邮件',
                cssClass: 'outlook-button',
                onClick: () => {
                    let selectedKeys = this.rowSelection.getSelectedKeys();
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