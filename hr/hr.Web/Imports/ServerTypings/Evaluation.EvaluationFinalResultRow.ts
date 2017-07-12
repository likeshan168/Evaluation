namespace hr.Evaluation {
    export interface EvaluationFinalResultRow {
        Id?: number;
        UserId?: number;
        ExamId?: number;
        Title?: string;
        UserName?: string;
        TotalScore?: number;
        Grade?: string;
        Email?: string;
    }

    export namespace EvaluationFinalResultRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Evaluation.EvaluationFinalResult';

        export namespace Fields {
            export declare const Id: string;
            export declare const UserId: string;
            export declare const ExamId: string;
            export declare const Title: string;
            export declare const UserName: string;
            export declare const TotalScore: string;
            export declare const Grade: string;
            export declare const Email: string;
        }

        ['Id', 'UserId', 'ExamId', 'Title', 'UserName', 'TotalScore', 'Grade', 'Email'].forEach(x => (<any>Fields)[x] = x);
    }
}

