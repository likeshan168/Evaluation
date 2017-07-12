namespace hr.Evaluation {
    export interface UserToUserViewRow {
        Id?: number;
        UserId?: number;
        ExamId?: number;
        EvaluationUserId?: number;
        Email?: string;
        Username?: string;
        HasEvaluated?: boolean;
    }

    export namespace UserToUserViewRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Evaluation.UserToUserView';

        export namespace Fields {
            export declare const Id: string;
            export declare const UserId: string;
            export declare const ExamId: string;
            export declare const EvaluationUserId: string;
            export declare const Email: string;
            export declare const Username: string;
            export declare const HasEvaluated: string;
        }

        ['Id', 'UserId', 'ExamId', 'EvaluationUserId', 'Email', 'Username', 'HasEvaluated'].forEach(x => (<any>Fields)[x] = x);
    }
}

