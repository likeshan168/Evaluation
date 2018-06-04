
namespace hr.Default {
    export interface SelfEvaluationResultArchiveRow {
        Id?: number;
        ExamTitle?: string;
        UserName?: string;
        ExamContent?: string;
        InputContent?: string;
        DepartmentName?: string;
    }

    export namespace SelfEvaluationResultArchiveRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ExamTitle';
        export const localTextPrefix = 'Default.SelfEvaluationResultArchive';

        export namespace Fields {
            export declare const Id;
            export declare const ExamTitle;
            export declare const UserName;
            export declare const ExamContent;
            export declare const InputContent;
            export declare const DepartmentName;
        }

        ['Id', 'ExamTitle', 'UserName', 'ExamContent', 'InputContent', 'DepartmentName'].forEach(x => (<any>Fields)[x] = x);
    }
}

