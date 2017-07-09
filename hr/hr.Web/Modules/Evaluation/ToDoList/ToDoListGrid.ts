
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    export class ToDoListGrid extends Serenity.EntityGrid<ToDoListRow, any> {
        protected getColumnsKey() { return 'Evaluation.ToDoList'; }
        protected getDialogType() { return ToDoListDialog; }
        protected getIdProperty() { return ToDoListRow.idProperty; }
        protected getLocalTextPrefix() { return ToDoListRow.localTextPrefix; }
        protected getService() { return ToDoListService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected addButtonClick() {
            ToDoListService.GetCurrentUserId(null, response => {

                this.editItem(<Evaluation.ToDoListRow>{
                    UserId: response,
                    StartDate: Q.formatDate(new Date(), 'yyyy-MM-dd'),
                    CreateBy: response
                });
            });

        }

        /**
       * Removing add button from grid using its css class
       */
        protected getButtons(): Serenity.ToolButton[] {
            //Q.Authorization.hasPermission("")
            var buttons = super.getButtons();
            console.log(Q.Authorization.userDefinition.Permissions);
            if (!Q.Authorization.hasPermission("Evaluation:ToDoList:Modify")) {

                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
                return buttons;
            }
            return buttons;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            if (Q.Authorization.hasPermission("Evaluation:ToDoList:Modify")) {
                super.onClick(e, row, cell);
            } else {
                var target = $(e.target);

                if (target.hasClass("s-EditLink")) {
                    e.preventDefault();
                    Q.notifyError("您无权进行查看,请联系管理员！");
                }
            }
        }

        protected getColumns() {
            //super.getQuickFilters();
            var columns = super.getColumns();
            let flds = ToDoListRow.Fields;
            let section = "Evaluation";
            let index = 0;
            Q.first(columns, x => x.field === flds.Url)
                .format = (ctx) => {
                    //TODO: 考虑过期的情况
                    return `<a href='${ctx.value.substr(ctx.value.indexOf('/') + 1)}'>点击进入</a>`
                }
            return columns;
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
            grid.setSelectionModel(new Slick.RowSelectionModel());
            return grid;
        }
    }
}