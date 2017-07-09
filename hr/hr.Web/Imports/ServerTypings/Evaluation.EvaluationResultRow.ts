namespace hr.Evaluation {
    export interface EvaluationResultRow {
        Id?: number;
        UserId?: number;
        ExamId?: number;
        TotalScore?: number;
        UserUsername?: string;
        ExamTitle?: string;
    }

    export namespace EvaluationResultRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Evaluation.EvaluationResult';

        export namespace Fields {
            export declare const Id: string;
            export declare const UserId: string;
            export declare const ExamId: string;
            export declare const TotalScore: string;
            export declare const UserUsername: string;
            export declare const ExamTitle: string;
        }

        ['Id', 'UserId', 'ExamId', 'TotalScore', 'UserUsername', 'ExamTitle'].forEach(x => (<any>Fields)[x] = x);
    }
}

