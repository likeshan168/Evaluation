
namespace hr.Default {
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
        export const localTextPrefix = 'Default.CompanyEvaluationArchive';

        export namespace Fields {
            export declare const Id;
            export declare const ExamTitle;
            export declare const UserName;
            export declare const InputContent;
            export declare const DepartmentName;
        }

        ['Id', 'ExamTitle', 'UserName', 'InputContent', 'DepartmentName'].forEach(x => (<any>Fields)[x] = x);
    }
}

