namespace hr.Evaluation {
    export interface DepartmentRow {
        Id?: number;
        Name?: string;
        Remark?: string;
    }

    export namespace DepartmentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Evaluation.Department';
        export const lookupKey = 'Evaluation.Department';

        export function getLookup(): Q.Lookup<DepartmentRow> {
            return Q.getLookup<DepartmentRow>('Evaluation.Department');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const Name: string;
            export declare const Remark: string;
        }

        ['Id', 'Name', 'Remark'].forEach(x => (<any>Fields)[x] = x);
    }
}

