namespace hr.Administration {

    @Serenity.Decorators.registerClass()
    export class ChooseRoleDialog extends Serenity.TemplatedDialog<ChooseRoleDialogOptions> {

        private permissions: RoleCheckEditor;

        constructor(opt: ChooseRoleDialogOptions) {
            super(opt);
            this.permissions = new RoleCheckEditor(this.byId('Roles'));
        }

        protected getDialogOptions() {
            var opt = super.getDialogOptions();

            opt.buttons = [{
                text: Q.text('Dialogs.OkButton'),
                click: () => {
                    Q.serviceRequest('Administration/UserRole/BatchUpdate', {
                        UserIds: this.options.userIDs,
                        Roles: this.permissions.value.map(x => parseInt(x, 10))
                    }, response => {
                        this.dialogClose();
                        Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                        this.options.userGrid.refresh();
                        this.options.userGrid.rowSelection.clear();
                    });
                }
            }, {
                text: Q.text('Dialogs.CancelButton'),
                click: () => this.dialogClose()
            }];

            opt.title = "分配角色";
            return opt;
        }

        protected getTemplate() {
            return "<div id='~_Roles'></div>";
        }
    }

    export interface ChooseRoleDialogOptions {
        userIDs: number[];
        userGrid: UserGrid;
    }
}