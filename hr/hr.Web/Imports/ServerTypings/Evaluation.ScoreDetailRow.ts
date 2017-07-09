namespace hr.Evaluation {
    export interface ScoreDetailRow {
        Id?: number;
        EvaluationResultDetailId?: number;
        UserId?: number;
        Score?: number;
    }

    export namespace ScoreDetailRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Evaluation.ScoreDetail';

        export namespace Fields {
            export declare const Id: string;
            export declare const EvaluationResultDetailId: string;
            export declare const UserId: string;
            export declare const Score: string;
        }

        ['Id', 'EvaluationResultDetailId', 'UserId', 'Score'].forEach(x => (<any>Fields)[x] = x);
    }
}

