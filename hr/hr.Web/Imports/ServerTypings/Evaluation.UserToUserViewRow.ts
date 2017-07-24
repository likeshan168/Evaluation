namespace hr.Evaluation {
    export interface UserToUserViewRow {
        Id?: number;
        UserId?: number;
        ExamId?: number;
        EvaluationUserId?: number;
        Email?: string;
        Username?: string;
        EvaluationEmail?: string;
        EvaluationName?: string;
        Title?: string;
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
            export declare const EvaluationEmail: string;
            export declare const EvaluationName: string;
            export declare const Title: string;
            export declare const HasEvaluated: string;
        }

        ['Id', 'UserId', 'ExamId', 'EvaluationUserId', 'Email', 'Username', 'EvaluationEmail', 'EvaluationName', 'Title', 'HasEvaluated'].forEach(x => (<any>Fields)[x] = x);
    }
}

