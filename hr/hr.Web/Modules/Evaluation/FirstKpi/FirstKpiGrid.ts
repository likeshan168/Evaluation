
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    export class FirstKpiGrid extends Serenity.EntityGrid<FirstKpiRow, any> {
        protected getColumnsKey() { return 'Evaluation.FirstKpi'; }
        protected getDialogType() { return FirstKpiDialog; }
        protected getIdProperty() { return FirstKpiRow.idProperty; }
        protected getLocalTextPrefix() { return FirstKpiRow.localTextPrefix; }
        protected getService() { return FirstKpiService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected addButtonClick() {
            this.editItem(<FirstKpiRow>{
                OrderNo: this.getMax(this.getItems()) + 1
            });
        }

        private getMax(arr: FirstKpiRow[]): number {
            let tmp = arr.map(p => p.OrderNo);
            let max = tmp[0];
            for (let i = 1; i < tmp.length; i++) {
                if (max < tmp[i]) {
                    max = tmp[i];
                }
            }

            return max;
        }
    }
}