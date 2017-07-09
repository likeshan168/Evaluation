
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ScoreDetailDialog extends Serenity.EntityDialog<ScoreDetailRow, any> {
        protected getFormKey() { return ScoreDetailForm.formKey; }
        protected getIdProperty() { return ScoreDetailRow.idProperty; }
        protected getLocalTextPrefix() { return ScoreDetailRow.localTextPrefix; }
        protected getService() { return ScoreDetailService.baseUrl; }

        protected form = new ScoreDetailForm(this.idPrefix);

    }
}