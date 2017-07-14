namespace hr.Evaluation {
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.maximizable()
    export class EvaluationFinalResultDetail extends Serenity.TemplatedDialog<any>{
        private detailGrid: EvaluationResultViewGrid;
        private userId: number;
        private examId: number;
        constructor(userId: number, examId: number) {
            super();
            this.userId = userId;
            this.examId = examId;
        }
        protected onDialogOpen() {
            super.onDialogOpen();
            //Evaluation.EvaluationItemService.List({}, response => {
            //    this.examList = new EvaluationItemGrid($("#div").first()).init();
            //    let selectedKeys = $("[name='EvaluationIds']").val().split(',');
            //    this.examList.rowSelection.selectKeys(selectedKeys);
            //    Q.initFullHeightGridPage($('#div'));
            //})

            this.detailGrid = new EvaluationResultViewGrid($("#div").first(), this.userId, this.examId).init();
            //let selectedKeys = $("[name='EvaluationIds']").val().split(',');
            //this.examList.rowSelection.selectKeys(selectedKeys);
            Q.initFullHeightGridPage($('#div'));
        }

        protected getTemplate() {
            // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
            return "<div id='div' style='height:500px;'></div>";
        }

        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = '考核结果详情';
            opt.buttons = [
                //{
                //    text: "Ok",
                //    showText: "Ok",
                //    click: () => {
                //        //Q.notifyInfo("ok");
                //        //console.log(this.examList.rowSelection.getSelectedKeys());
                //        let selectedItems = this.examList.rowSelection.getSelectedKeys();
                //        if (selectedItems.length == 0) {
                //            Q.notifyWarning("请选择要发布的考核项");
                //            return;
                //        }

                //        $("[name='EvaluationIds']").val(this.examList.rowSelection.getSelectedKeys().join(','));
                //        this.dialogClose();
                //    }
                //},
                {
                    text: "Cancel",
                    showText: "Cancel",
                    click: () => {
                        //Q.notifyInfo("cancel");
                        this.dialogClose();
                    }
                }];
            return opt;
        }
    }
}