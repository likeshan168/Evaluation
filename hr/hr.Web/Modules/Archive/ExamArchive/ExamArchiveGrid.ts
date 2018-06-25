
namespace hr.Archive {
    
    @Serenity.Decorators.registerClass()
    export class ExamArchiveGrid extends Serenity.EntityGrid<ExamArchiveRow, any> {
        protected getColumnsKey() { return 'Archive.ExamArchive'; }
        protected getDialogType() { return ExamArchiveDialog; }
        protected getIdProperty() { return ExamArchiveRow.idProperty; }
        protected getLocalTextPrefix() { return ExamArchiveRow.localTextPrefix; }
        protected getService() { return ExamArchiveService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}