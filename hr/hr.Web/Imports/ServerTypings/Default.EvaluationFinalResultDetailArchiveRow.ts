
namespace hr.Default {
    export interface EvaluationFinalResultDetailArchiveRow {
        Id?: number;
        ExamTitle?: string;
        UserName?: string;
        Score?: number;
        EvaluationUserName?: string;
        DepartmentName?: string;
    }

    export namespace EvaluationFinalResultDetailArchiveRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ExamTitle';
        export const localTextPrefix = 'Default.EvaluationFinalResultDetailArchive';

        export namespace Fields {
            export declare const Id;
            export declare const ExamTitle;
            export declare const UserName;
            export declare const Score;
            export declare const EvaluationUserName;
            export declare const DepartmentName;
        }

        ['Id', 'ExamTitle', 'UserName', 'Score', 'EvaluationUserName', 'DepartmentName'].forEach(x => (<any>Fields)[x] = x);
    }
}

