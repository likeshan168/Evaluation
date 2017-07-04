namespace hr.Evaluation {
    export interface EmployeeRow {
        Id?: number;
        Name?: string;
        IdCard?: string;
        Gender?: string;
        BirthDate?: string;
        Email?: string;
        DepartmentId?: number;
        Remark?: string;
        DepartmentName?: string;
    }

    export namespace EmployeeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Evaluation.Employee';

        export namespace Fields {
            export declare const Id: string;
            export declare const Name: string;
            export declare const IdCard: string;
            export declare const Gender: string;
            export declare const BirthDate: string;
            export declare const Email: string;
            export declare const DepartmentId: string;
            export declare const Remark: string;
            export declare const DepartmentName: string;
        }

        ['Id', 'Name', 'IdCard', 'Gender', 'BirthDate', 'Email', 'DepartmentId', 'Remark', 'DepartmentName'].forEach(x => (<any>Fields)[x] = x);
    }
}

