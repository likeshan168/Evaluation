namespace hr.Evaluation {
    export interface SecondKpiRow {
        Id?: number;
        OrderNo?: number;
        Name?: string;
        Remark?: string;
        FirstKpiId?: number;
        FirstKpiName?: string;
    }

    export namespace SecondKpiRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Evaluation.SecondKpi';
        export const lookupKey = 'Evaluation.SecondKpi';

        export function getLookup(): Q.Lookup<SecondKpiRow> {
            return Q.getLookup<SecondKpiRow>('Evaluation.SecondKpi');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const OrderNo: string;
            export declare const Name: string;
            export declare const Remark: string;
            export declare const FirstKpiId: string;
            export declare const FirstKpiName: string;
        }

        ['Id', 'OrderNo', 'Name', 'Remark', 'FirstKpiId', 'FirstKpiName'].forEach(x => (<any>Fields)[x] = x);
    }
}

