
namespace hr.Evaluation {
    
    @Serenity.Decorators.registerClass()
    export class UserEvaluationRelationGrid extends Serenity.EntityGrid<UserEvaluationRelationRow, any> {
        protected getColumnsKey() { return 'Evaluation.UserEvaluationRelation'; }
        protected getDialogType() { return UserEvaluationRelationDialog; }
        protected getIdProperty() { return UserEvaluationRelationRow.idProperty; }
        protected getLocalTextPrefix() { return UserEvaluationRelationRow.localTextPrefix; }
        protected getService() { return UserEvaluationRelationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}