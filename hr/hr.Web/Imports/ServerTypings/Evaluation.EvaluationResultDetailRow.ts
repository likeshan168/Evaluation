﻿namespace hr.Evaluation {
    export interface EvaluationResultDetailRow {
        Id?: number;
        ExamId?: number;
        EvaluationItemId?: number;
        InputContent?: string;
        Score?: number;
        UserId?: number;
        EvaluationUserId?: number;
    }

    export namespace EvaluationResultDetailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'InputContent';
        export const localTextPrefix = 'Evaluation.EvaluationResultDetail';

        export namespace Fields {
            export declare const Id: string;
            export declare const ExamId: string;
            export declare const EvaluationItemId: string;
            export declare const InputContent: string;
            export declare const Score: string;
            export declare const UserId: string;
            export declare const EvaluationUserId: string;
        }

        ['Id', 'ExamId', 'EvaluationItemId', 'InputContent', 'Score', 'UserId', 'EvaluationUserId'].forEach(x => (<any>Fields)[x] = x);
    }
}

