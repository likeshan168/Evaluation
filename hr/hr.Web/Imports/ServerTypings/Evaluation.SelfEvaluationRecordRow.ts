namespace hr.Evaluation {
    export interface SelfEvaluationRecordRow {
        SelfEvaluationRecordId?: number;
        UserId?: number;
        ExamId?: number;
        EvaluationDate?: string;
        IsSelfEvaluated?: boolean;
        Username?: string;
        ExamTitle?: string;
    }

    export namespace SelfEvaluationRecordRow {
        export const idProperty = 'SelfEvaluationRecordId';
        export const localTextPrefix = 'Evaluation.SelfEvaluationRecord';

        export namespace Fields {
            export declare const SelfEvaluationRecordId: string;
            export declare const UserId: string;
            export declare const ExamId: string;
            export declare const EvaluationDate: string;
            export declare const IsSelfEvaluated: string;
            export declare const Username: string;
            export declare const ExamTitle: string;
        }

        ['SelfEvaluationRecordId', 'UserId', 'ExamId', 'EvaluationDate', 'IsSelfEvaluated', 'Username', 'ExamTitle'].forEach(x => (<any>Fields)[x] = x);
    }
}

