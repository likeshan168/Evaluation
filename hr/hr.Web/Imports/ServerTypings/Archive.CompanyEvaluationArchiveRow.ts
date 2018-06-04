namespace hr.Archive {
    export interface CompanyEvaluationArchiveRow {
        Id?: number;
        ExamTitle?: string;
        UserName?: string;
        InputContent?: string;
        DepartmentName?: string;
    }

    export namespace CompanyEvaluationArchiveRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ExamTitle';
        export const localTextPrefix = 'Archive.CompanyEvaluationArchive';

        export namespace Fields {
            export declare const Id: string;
            export declare const ExamTitle: string;
            export declare const UserName: string;
            export declare const InputContent: string;
            export declare const DepartmentName: string;
        }

        ['Id', 'ExamTitle', 'UserName', 'InputContent', 'DepartmentName'].forEach(x => (<any>Fields)[x] = x);
    }
}

