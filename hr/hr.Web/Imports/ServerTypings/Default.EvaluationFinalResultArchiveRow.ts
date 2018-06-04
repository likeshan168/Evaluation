
namespace hr.Default {
    export interface EvaluationFinalResultArchiveRow {
        Id?: number;
        ExamTitle?: string;
        UserName?: string;
        TotalScore?: number;
        Grade?: string;
        DepartmentName?: string;
    }

    export namespace EvaluationFinalResultArchiveRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ExamTitle';
        export const localTextPrefix = 'Default.EvaluationFinalResultArchive';

        export namespace Fields {
            export declare const Id;
            export declare const ExamTitle;
            export declare const UserName;
            export declare const TotalScore;
            export declare const Grade;
            export declare const DepartmentName;
        }

        ['Id', 'ExamTitle', 'UserName', 'TotalScore', 'Grade', 'DepartmentName'].forEach(x => (<any>Fields)[x] = x);
    }
}

