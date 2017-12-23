namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    export class EvaluationResultViewGrid extends Serenity.EntityGrid<EvaluationResultViewRow, any> {
        protected getColumnsKey() { return 'Evaluation.EvaluationResultView'; }
        //protected getDialogType() { return EvaluationResultViewDialog; }
        protected getLocalTextPrefix() { return EvaluationResultViewRow.localTextPrefix; }
        protected getService() { return EvaluationResultViewService.baseUrl; }
        protected getIdProperty() { return EvaluationResultViewRow.idProperty; }

        private userId: number;
        private examId: number;
        constructor(container: JQuery, userId: number, examId: number) {
            super(container);
            this.userId = userId;
            this.examId = examId;
            this.setTitle("");
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "add-button"), 1);
            buttons.push({
                title: '发送邮件通知所有未完成评估的人进行评估',
                cssClass: 'outlook-button',
                onClick: () => {
                    Q.confirm("确认发送邮件吗",
                        () => {
                            //get all the items
                            let items = this.view.getItems().filter(p => p.TotalScore === 0);
                            let arr = new Array<Evaluation.UserEmailRequest>();
                            for (let i = 0; i < items.length; i++) {
                                arr.push({
                                    Email: items[i].EvaluationEmail,
                                    EvaluationUserName: items[i].EvaluationUser,
                                    Title: items[i].Title,
                                    Url: `Evaluation/Evaluation/SelfEvaluation?i=${items[i].ExamId}`,
                                    UserName: items[i].Username
                                });
                            }
                            EvaluationResultViewService.BatchSendNotifyEmail({
                                    Entities: arr
                                },
                                response => {
                                    if (response) {
                                        Q.notifySuccess("邮件发送成功");
                                    } else {
                                        Q.notifyError("邮件发送失败");
                                    }
                                });
                        });
                }
            });
            return buttons;
        }

        protected onViewSubmit() {
            // only continue if base class returns true (didn't cancel request)
            if (!super.onViewSubmit()) {
                return false;
            }

            // view object is the data source for grid (SlickRemoteView)
            // this is an EntityGrid so its Params object is a ListRequest
            var request = this.view.params as Serenity.ListRequest;

            // list request has a Criteria parameter
            // we AND criteria here to existing one because 
            // otherwise we might clear filter set by 
            // an edit filter dialog if any.

            request.Criteria = Serenity.Criteria.and(request.Criteria,
                [['UserId'], '=', this.userId],
                [['ExamId'], '=', this.examId]);

            // TypeScript doesn't support operator overloading
            // so we had to use array syntax above to build criteria.

            // Make sure you write
            // [['Field'], '>', 10] (which means field A is greater than 10)
            // not 
            // ['A', '>', 10] (which means string 'A' is greater than 10

            return true;
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

        protected getColumns() {
            //super.getQuickFilters();
            var columns = super.getColumns();
            let flds = EvaluationResultViewRow.Fields;
            let index = 0;
            Q.first(columns, x => x.field === flds.EvaluationEmail)
                .format = (ctx) => {
                    //TODO: 考虑过期的情况
                    if (ctx.item.TotalScore > 0) {
                        return ctx.value;
                    } else {
                        return `<a href='#' class='send_email'>${ctx.value}</a>`;
                    }
                }
            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {

            var target = $(e.target);
            let rst = this.itemAt(row);
            if (target.hasClass("send_email")) {
                Q.confirm("发送邮件通知吗", () => {
                    EvaluationResultViewService.SendNotifyEmail({
                        UserName: rst.Username,
                        Title: rst.Title,
                        Url: `Evaluation/Evaluation/SelfEvaluation?i=${rst.ExamId}`,
                        Email: rst.EvaluationEmail,
                        EvaluationUserName: rst.EvaluationUser
                    }, (response => {
                        if (response) {
                            Q.notifyInfo("邮件已发送");
                        }
                    }));
                })
            }
        }
    }
}