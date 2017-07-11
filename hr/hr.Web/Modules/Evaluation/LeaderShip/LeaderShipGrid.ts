
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    export class LeaderShipGrid extends Serenity.EntityGrid<LeaderShipRow, any> {
        protected getColumnsKey() { return 'Evaluation.LeaderShip'; }
        protected getDialogType() { return LeaderShipDialog; }
        protected getIdProperty() { return LeaderShipRow.idProperty; }
        protected getLocalTextPrefix() { return LeaderShipRow.localTextPrefix; }
        protected getService() { return LeaderShipService.baseUrl; }
        private dragging: HTMLElement;
        constructor(container: JQuery) {
            super(container);

            new Serenity.TreeGridMixin({
                grid: this,
                toggleField: LeaderShipRow.Fields.UserUsername,
                getParentId: x => x.ParentUserId,
                initialCollapse: () => false,
            });

            // save prior drag target to restore its color during drag
            var priorDragTarget: any;


            // prevent the grid from cancelling drag'n'drop by default
            this.slickGrid.onDragInit.subscribe((e, dd) => {
                e.stopImmediatePropagation();
            });

            // this method is called when an item is about to be dragged
            this.slickGrid.onDragStart.subscribe((e, dd) => {
                // only allow edit links to be dragged
                if (!$(e.target).hasClass('s-EditLink'))
                    return;

                // make sure there is a cell in source location
                var cell = this.slickGrid.getCellFromEvent(e);
                if (!cell) {
                    return;
                }

                // notify that we'll handle drag
                e.stopImmediatePropagation();

                // save details about dragged item
                dd.row = cell.row;
                var item = this.itemAt(cell.row);
                dd.item = item;

                // a unique name for our operation
                dd.mode = "move";

                // create an absolute position helper shown during dragging
                var helper = $("<span></span>")
                    .addClass('drag-helper')
                    .text("Moving " + item.UserUsername)
                    .appendTo(document.body);
                dd.helper = helper;
                console.log(dd.helper);
            });

            // this method is periodically called during drag
            this.slickGrid.onDrag.subscribe((e, dd) => {
                // only handle our operation
                if (dd.mode != "move") {
                    return;
                }

                // if we changed color of some target before, reset it
                if (priorDragTarget && priorDragTarget != e.target) {
                    $(priorDragTarget).css('background-color', '');
                    priorDragTarget = null;
                }

                // find target, the source will drag into
                var cell = this.slickGrid.getCellFromEvent(e);
                var target = !cell ? null : this.itemAt(cell.row);

                // accept only edit links and valid items as drag target
                var reject = !$(e.target).hasClass('s-EditLink') || !this.canMoveUnder(dd.item, target);

                if (reject) {
                    dd.helper.text("Can't move " + dd.item.UserUsername + " here")
                }
                else {
                    dd.helper.text("Move " + dd.item.UserUsername + " under " + $(e.target).text());
                    // change color of current drag target
                    $(e.target).css('background-color', '#ddeeee');
                    priorDragTarget = e.target;
                }

                // toggle class of helper to show relevant accept / reject icon
                dd.helper.toggleClass('reject', reject);

                // position helper next to current mouse position
                dd.helper.css({ top: e.pageY + 5, left: e.pageX + 4 });
            });

            // this is called when drag is completed
            this.slickGrid.onDragEnd.subscribe((e, dd) => {
                if (dd.mode != "move") {
                    return;
                }

                // prevent browser from changing url
                e.preventDefault();

                // clear indicator color and drag helper
                priorDragTarget && $(priorDragTarget).css('background-color', '');
                dd.helper.remove();

                // determine target row
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = dd.item as LeaderShipRow;
                var target = !cell ? null : this.itemAt(cell.row);

                // check again that this is valid drag target
                if ($(e.target).hasClass('s-EditLink') && this.canMoveUnder(item, target)) {

                    // this will move our primary drag source under new parent
                    var moveItem = function (onSuccess: () => void) {
                        LeaderShipService.Update({
                            EntityId: item.UserId,
                            Entity: {
                                ParentUserId: target.UserId
                            }
                        }, onSuccess);
                    }

                    // if drag source has some children, need some confirmation
                    var children = this.getChildren(dd.item);
                    if (children.length > 0) {
                        Q.confirm('Move its children alongside the item?', () => {
                            // if responded yes, moving item under new parent should be enough
                            moveItem(() => this.refresh())
                        },
                            {
                                onNo: () => {
                                    // if responded no, children should move under old parent of item
                                    var oldParentId = item.ParentUserId == null ? null : item.ParentUserId;

                                    var moveNextChild = function (onSuccess: () => void) {
                                        if (children.length) {
                                            var x = children.shift();
                                            LeaderShipService.Update({
                                                EntityId: x.UserId,
                                                Entity: {
                                                    ParentUserId: oldParentId || null
                                                }
                                            }, () => moveNextChild(onSuccess), {
                                                    onError: () => this.refresh()
                                                });
                                        }
                                        else
                                            onSuccess();
                                    }

                                    // first move item itself under new parent, 
                                    // then move its children under old parent one by one
                                    moveItem(() => moveNextChild(() => this.refresh()));
                                }
                            });
                    }
                    else {
                        // item has no children, just move it under new parent
                        moveItem(() => this.refresh());
                    }
                }

                return false;
            });
        }


        /**
         * This method will determine if item can be moved under a given target
         * An item can't be moved under itself, under one of its children
         */
        private canMoveUnder(item: LeaderShipRow, target: LeaderShipRow) {
            if (!item || !target || item.UserId == target.UserId || item.ParentUserId == target.UserId)
                return false;

            if (Q.any(this.getParents(target), x => x.UserId == item.UserId))
                return false;

            return true;
        }

        /**
         * Gets children list of an item
         */
        private getChildren(item: LeaderShipRow) {
            return this.getItems().filter(x => x.ParentUserId == item.UserId);
        }

        /**
         * Gets all parents of an item
         */
        private getParents(item: LeaderShipRow): LeaderShipRow[] {
            // use this to prevent infinite recursion
            var visited = {};

            var result: LeaderShipRow[] = [];

            // while item has a parent and not visited yet
            while (item.ParentUserId && !visited[item.ParentUserId]) {
                // find parent by its ID
                item = this.view.getItemById(item.ParentUserId);
                if (!item)
                    break;
                result.push(item);
                visited[item.UserId] = true;
            }

            return result;
        }

        protected getButtons() {
            return [];
        }

        protected usePager() {
            return false;
        }

        //protected onClick(e: JQueryEventObject, row: number, cell: number) {
        //    var target = $(e.target);
        //    if (target.hasClass("s-EditLink")) {
        //        e.preventDefault();
        //    }
        //}
    }
}