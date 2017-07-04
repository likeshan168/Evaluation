namespace hr.Evaluation {
    export interface EvaluationItemRow {
        Id?: number;
        OrderNo?: number;
        Content?: string;
        ContentType?: ContentType;
        Score?: number;
        Mark?: string;
        IsEnabled?: boolean;
        IsSelfEvaluation?: boolean;
        Remark?: string;
        SecondKpiId?: number;
        SecondKpiName?: string;
        FirstKpiId?: number;
        FirstKpiName?: string;
    }

    export namespace EvaluationItemRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Content';
        export const localTextPrefix = 'Evaluation.EvaluationItem';

        export namespace Fields {
            export declare const Id: string;
            export declare const OrderNo: string;
            export declare const Content: string;
            export declare const ContentType: string;
            export declare const Score: string;
            export declare const Mark: string;
            export declare const IsEnabled: string;
            export declare const IsSelfEvaluation: string;
            export declare const Remark: string;
            export declare const SecondKpiId: string;
            export declare const SecondKpiName: string;
            export declare const FirstKpiId: string;
            export declare const FirstKpiName: string;
        }

        ['Id', 'OrderNo', 'Content', 'ContentType', 'Score', 'Mark', 'IsEnabled', 'IsSelfEvaluation', 'Remark', 'SecondKpiId', 'SecondKpiName', 'FirstKpiId', 'FirstKpiName'].forEach(x => (<any>Fields)[x] = x);
    }
}

