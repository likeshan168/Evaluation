

namespace hr.Default {
    export class TodoListViewForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TodoListView';
    }

    export interface TodoListViewForm {
        Id: Serenity.IntegerEditor;
        Username: Serenity.StringEditor;
        Url: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        Title: Serenity.StringEditor;
    }

    [['Id', () => Serenity.IntegerEditor], ['Username', () => Serenity.StringEditor], ['Url', () => Serenity.StringEditor], ['StartDate', () => Serenity.DateEditor], ['EndDate', () => Serenity.DateEditor], ['Title', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TodoListViewForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}