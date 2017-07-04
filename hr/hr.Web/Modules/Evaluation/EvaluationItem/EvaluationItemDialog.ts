
namespace hr.Evaluation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EvaluationItemDialog extends Serenity.EntityDialog<EvaluationItemRow, any> {
        protected getFormKey() { return EvaluationItemForm.formKey; }
        protected getIdProperty() { return EvaluationItemRow.idProperty; }
        protected getLocalTextPrefix() { return EvaluationItemRow.localTextPrefix; }
        protected getNameProperty() { return EvaluationItemRow.nameProperty; }
        protected getService() { return EvaluationItemService.baseUrl; }

        protected form = new EvaluationItemForm(this.idPrefix);

        protected updateInterface() {

            // by default cloneButton is hidden in base UpdateInterface method
            super.updateInterface();

            // here we show it if it is edit mode (not new)
            this.cloneButton.toggle(this.isEditMode());
        }

        /**
         * Overriding this method is optional to customize cloned entity
         */
        protected getCloningEntity() {
            var clone = super.getCloningEntity();

            // add (Clone) suffix if it's not already added
            //var suffix = ' (Clone)';
            //if (!Q.endsWith(clone.Content || '', suffix)) {
            //    clone.Content = (clone.Content || '') + suffix;
            //}

            clone.Content = '';

            // it's better to clear image for this sample
            // otherwise we would have to create a temporary copy of it
            // and upload
            clone.OrderNo = clone.OrderNo + 1;
            clone.Score = clone.Score + 1;
            return clone;
        }

        
    }
}