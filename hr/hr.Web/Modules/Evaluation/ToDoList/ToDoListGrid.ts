
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
                    CreateBy: response,
                    IsEnabled: true
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

        /**
        * This method is called to get list of quick filters to be created for this grid.
        * By default, it returns quick filter objects corresponding to properties that
        * have a [QuickFilter] attribute at server side OrderColumns.cs
        */
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class
            let filters = super.getQuickFilters();
            console.log(filters);
            // get a reference to order row field names
            let fld = hr.Evaluation.ToDoListRow.Fields;

            // quick filter init method is a good place to set initial
            // value for a quick filter editor, just after it is created

            //Q.first(filters, x => x.field == fld.OrderDate).init = w => {
            //    // w is a reference to the editor for this quick filter widget
            //    // here we cast it to DateEditor, and set its value as date.
            //    // note that in Javascript, months are 0 based, so date below
            //    // is actually 2016-05-01
            //    (w as Serenity.DateEditor).valueAsDate = new Date(2016, 4, 1);

            //    // setting start date was simple. but this quick filter is actually
            //    // a combination of two date editors. to get reference to second one,
            //    // need to find its next sibling element by its class
            //    let endDate = w.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
            //    endDate.valueAsDate = new Date(2016, 6, 1);
            //};

            Q.first(filters, x => x.field == fld.IsEnabled).init = w => {
                // enum editor has a string value, so need to call toString()
                //(w as Serenity.BooleanEditor).value = true;
                (w as Serenity.SelectEditor).value = "1";

            };

            return filters;
        }
    }
}