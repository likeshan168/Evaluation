namespace hr.Archive {
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
        export const localTextPrefix = 'Archive.EvaluationFinalResultArchive';

        export namespace Fields {
            export declare const Id: string;
            export declare const ExamTitle: string;
            export declare const UserName: string;
            export declare const TotalScore: string;
            export declare const Grade: string;
            export declare const DepartmentName: string;
        }

        ['Id', 'ExamTitle', 'UserName', 'TotalScore', 'Grade', 'DepartmentName'].forEach(x => (<any>Fields)[x] = x);
    }
}

