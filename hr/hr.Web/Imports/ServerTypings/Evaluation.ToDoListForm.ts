namespace hr.Evaluation {
    export class ToDoListForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.ToDoList';

    }

    export interface ToDoListForm {
        UserId: Serenity.LookupEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        Title: Serenity.StringEditor;
        Content: Serenity.TextAreaEditor;
        ExamId: Serenity.LookupEditor;
        CreateBy: Serenity.LookupEditor;
    }

    [['UserId', () => Serenity.LookupEditor], ['StartDate', () => Serenity.DateEditor], ['EndDate', () => Serenity.DateEditor], ['Title', () => Serenity.StringEditor], ['Content', () => Serenity.TextAreaEditor], ['ExamId', () => Serenity.LookupEditor], ['CreateBy', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(ToDoListForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

