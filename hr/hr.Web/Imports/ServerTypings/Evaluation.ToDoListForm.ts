namespace hr.Evaluation {
    export class ToDoListForm extends Serenity.PrefixedContext {
        static formKey = 'Evaluation.ToDoList';

    }

    export interface ToDoListForm {
        UserId: Serenity.IntegerEditor;
        Title: Serenity.StringEditor;
        Content: Serenity.StringEditor;
    }

    [['UserId', () => Serenity.IntegerEditor], ['Title', () => Serenity.StringEditor], ['Content', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ToDoListForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

