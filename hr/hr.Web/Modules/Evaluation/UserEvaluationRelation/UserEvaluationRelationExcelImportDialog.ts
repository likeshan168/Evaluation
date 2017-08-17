namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    export class UserEvaluationRelationExcelImportDialog extends Serenity.PropertyDialog<any, any> {

        private form: UserEvaluationRelationImportForm;

        constructor() {
            super();

            this.form = new UserEvaluationRelationImportForm(this.idPrefix);
        }

        protected getDialogTitle(): string {
            return "导入Excel";
        }

        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: '导入',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;
                        if (this.form.ExamId.value == null) {
                            Q.notifyError("请选择考核!");
                            return;
                        }

                        if (this.form.FileName.value == null ||
                            Q.isEmptyOrNull(this.form.FileName.value.Filename)) {
                            Q.notifyError("Please select a file!");
                            return;
                        }

                        UserEvaluationRelationExcelImportService.ExcelImport({
                            ExamId: Q.parseInteger(this.form.ExamId.value),
                            FileName: this.form.FileName.value.Filename
                        }, response => {
                            Q.notifyInfo(
                                '新增: ' + (response.Inserted || 0) +
                                ', 更新: ' + (response.Updated || 0));

                            if (response.ErrorList != null && response.ErrorList.length > 0) {
                                Q.notifyError(response.ErrorList.join(',\r\n '));
                            }

                            this.dialogClose();
                        });
                    },
                },
                {
                    text: '取消',
                    click: () => this.dialogClose()
                }
            ];
        }
    }
}