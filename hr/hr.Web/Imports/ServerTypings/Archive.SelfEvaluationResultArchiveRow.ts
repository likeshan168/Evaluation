namespace hr.Archive {
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
        export const localTextPrefix = 'Archive.SelfEvaluationResultArchive';

        export namespace Fields {
            export declare const Id: string;
            export declare const ExamTitle: string;
            export declare const UserName: string;
            export declare const ExamContent: string;
            export declare const InputContent: string;
            export declare const DepartmentName: string;
        }

        ['Id', 'ExamTitle', 'UserName', 'ExamContent', 'InputContent', 'DepartmentName'].forEach(x => (<any>Fields)[x] = x);
    }
}

