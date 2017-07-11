
namespace hr.Default {
    export interface TodoListViewRow {
        Id?: number;
        Username?: string;
        Url?: string;
        StartDate?: string;
        EndDate?: string;
        Title?: string;
    }

    export namespace TodoListViewRow {
        export const nameProperty = 'Username';
        export const localTextPrefix = 'Default.TodoListView';

        export namespace Fields {
            export declare const Id;
            export declare const Username;
            export declare const Url;
            export declare const StartDate;
            export declare const EndDate;
            export declare const Title;
        }

        ['Id', 'Username', 'Url', 'StartDate', 'EndDate', 'Title'].forEach(x => (<any>Fields)[x] = x);
    }
}

