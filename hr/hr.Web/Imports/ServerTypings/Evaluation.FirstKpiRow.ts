namespace hr.Evaluation {
    export interface FirstKpiRow {
        Id?: number;
        OrderNo?: number;
        Name?: string;
        Remark?: string;
    }

    export namespace FirstKpiRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Evaluation.FirstKpi';
        export const lookupKey = 'Evaluation.FirstKpi';

        export function getLookup(): Q.Lookup<FirstKpiRow> {
            return Q.getLookup<FirstKpiRow>('Evaluation.FirstKpi');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const OrderNo: string;
            export declare const Name: string;
            export declare const Remark: string;
        }

        ['Id', 'OrderNo', 'Name', 'Remark'].forEach(x => (<any>Fields)[x] = x);
    }
}

