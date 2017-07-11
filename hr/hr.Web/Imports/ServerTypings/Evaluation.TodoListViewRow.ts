namespace hr.Evaluation {
    export interface TodoListViewRow {
        Id?: number;
        UserId?: number;
        Username?: string;
        Email?: string;
        Url?: string;
        StartDate?: string;
        EndDate?: string;
        Title?: string;
        IsComplete?: boolean;
        IsEnabled?: boolean;
        ExamId?: number;
    }

    export namespace TodoListViewRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Username';
        export const localTextPrefix = 'Evaluation.TodoListView';

        export namespace Fields {
            export declare const Id: string;
            export declare const UserId: string;
            export declare const Username: string;
            export declare const Email: string;
            export declare const Url: string;
            export declare const StartDate: string;
            export declare const EndDate: string;
            export declare const Title: string;
            export declare const IsComplete: string;
            export declare const IsEnabled: string;
            export declare const ExamId: string;
        }

        ['Id', 'UserId', 'Username', 'Email', 'Url', 'StartDate', 'EndDate', 'Title', 'IsComplete', 'IsEnabled', 'ExamId'].forEach(x => (<any>Fields)[x] = x);
    }
}

