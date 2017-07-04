namespace hr.Evaluation {
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.maximizable()
    export class UserListDialog extends Serenity.TemplatedDialog<any>{
        private userList: hr.Administration.UserGrid;

        protected onDialogOpen() {
            super.onDialogOpen();
            Evaluation.UserEvaluationRelationService.List({}, response => {
                this.userList = new hr.Administration.UserGrid($("#div").first()).init();
                let selectedKeys = $("[name='EvaluationUserIds']").val().split(',');
                this.userList.rowSelection.selectKeys(selectedKeys);
                Q.initFullHeightGridPage($('#div'));
            })
        }

        protected getTemplate() {
            // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
            return "<div id='div' style='height:500px;'></div>";
        }

        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = '用户列表';
            opt.buttons = [{
                text: "Ok",
                showText: "Ok",
                click: () => {
                    //Q.notifyInfo("ok");
                    //console.log(this.examList.rowSelection.getSelectedKeys());
                    let selectedItems = this.userList.rowSelection.getSelectedKeys();
                    if (selectedItems.length == 0) {
                        Q.notifyWarning("请选择用户");
                        return;
                    }
                    //console.log(this.userList.rowSelection.getSelectedKeys().join(','));
                    let users = this.userList.getItems().filter((value, index, arr) => {
                        return this.userList.rowSelection.getSelectedKeys().indexOf(value.UserId.toString()) >= 0;
                    });
                    console.log(users);
                    //[].filter(arr => {
                    //    return ar
                    //})
                    $("[name='EvaluationUserIds']").val(this.userList.rowSelection.getSelectedKeys().join(','));
                    this.dialogClose();
                }
            }, {
                text: "Cancel",
                showText: "Cancel",
                click: () => {
                    Q.notifyInfo("cancel");
                    this.dialogClose();
                }
            }];
            return opt;
        }
    }
}