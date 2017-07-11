namespace hr.Evaluation {
    export interface ToDoListRow {
        Id?: number;
        UserId?: number;
        Title?: string;
        Content?: string;
        IsComplete?: boolean;
        UserUsername?: string;
        StartDate?: string;
        EndDate?: string;
        CreateBy?: number;
        CreateByUsername?: string;
        Url?: string;
        ExamId?: number;
        ExamTitle?: string;
        IsEnabled?: boolean;
    }

    export namespace ToDoListRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Evaluation.ToDoList';

        export namespace Fields {
            export declare const Id: string;
            export declare const UserId: string;
            export declare const Title: string;
            export declare const Content: string;
            export declare const IsComplete: string;
            export declare const UserUsername: string;
            export declare const StartDate: string;
            export declare const EndDate: string;
            export declare const CreateBy: string;
            export declare const CreateByUsername: string;
            export declare const Url: string;
            export declare const ExamId: string;
            export declare const ExamTitle: string;
            export declare const IsEnabled: string;
        }

        ['Id', 'UserId', 'Title', 'Content', 'IsComplete', 'UserUsername', 'StartDate', 'EndDate', 'CreateBy', 'CreateByUsername', 'Url', 'ExamId', 'ExamTitle', 'IsEnabled'].forEach(x => (<any>Fields)[x] = x);
    }
}

