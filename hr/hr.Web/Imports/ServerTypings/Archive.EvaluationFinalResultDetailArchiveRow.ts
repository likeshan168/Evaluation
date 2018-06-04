namespace hr.Archive {
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
        export const localTextPrefix = 'Archive.EvaluationFinalResultDetailArchive';

        export namespace Fields {
            export declare const Id: string;
            export declare const ExamTitle: string;
            export declare const UserName: string;
            export declare const Score: string;
            export declare const EvaluationUserName: string;
            export declare const DepartmentName: string;
        }

        ['Id', 'ExamTitle', 'UserName', 'Score', 'EvaluationUserName', 'DepartmentName'].forEach(x => (<any>Fields)[x] = x);
    }
}

