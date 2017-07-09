
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    export class EvaluationResultGrid extends Serenity.EntityGrid<EvaluationResultRow, any> {
        protected getColumnsKey() { return 'Evaluation.EvaluationResult'; }
        protected getDialogType() { return EvaluationResultDialog; }
        protected getIdProperty() { return EvaluationResultRow.idProperty; }
        protected getLocalTextPrefix() { return EvaluationResultRow.localTextPrefix; }
        protected getService() { return EvaluationResultService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {
            //Q.Authorization.hasPermission("")
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            return buttons;

        }
    }
}