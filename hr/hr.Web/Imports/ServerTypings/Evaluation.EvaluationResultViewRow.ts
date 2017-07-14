namespace hr.Evaluation {
    export interface EvaluationResultViewRow {
        Id?: number;
        UserId?: number;
        Username?: string;
        ParentUserId?: number;
        ExamId?: number;
        Title?: string;
        Email?: string;
        EvaluationEmail?: string;
        TotalScore?: number;
        EvaluationUserId?: number;
        EvaluationUser?: string;
    }

    export namespace EvaluationResultViewRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Username';
        export const localTextPrefix = 'Evaluation.EvaluationResultView';

        export namespace Fields {
            export declare const Id: string;
            export declare const UserId: string;
            export declare const Username: string;
            export declare const ParentUserId: string;
            export declare const ExamId: string;
            export declare const Title: string;
            export declare const Email: string;
            export declare const EvaluationEmail: string;
            export declare const TotalScore: string;
            export declare const EvaluationUserId: string;
            export declare const EvaluationUser: string;
        }

        ['Id', 'UserId', 'Username', 'ParentUserId', 'ExamId', 'Title', 'Email', 'EvaluationEmail', 'TotalScore', 'EvaluationUserId', 'EvaluationUser'].forEach(x => (<any>Fields)[x] = x);
    }
}

