namespace hr.Archive {
    export interface ExamArchiveRow {
        Id?: number;
        ExamId?: number;
        ExamTitle?: string;
        FirstKpiName?: string;
        SecondKpiName?: string;
        Content?: string;
        ContentType?: number;
        Score?: number;
        Mark?: string;
        Remark?: string;
        EvaluationType?: number;
    }

    export namespace ExamArchiveRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ExamTitle';
        export const localTextPrefix = 'Archive.ExamArchive';

        export namespace Fields {
            export declare const Id: string;
            export declare const ExamId: string;
            export declare const ExamTitle: string;
            export declare const FirstKpiName: string;
            export declare const SecondKpiName: string;
            export declare const Content: string;
            export declare const ContentType: string;
            export declare const Score: string;
            export declare const Mark: string;
            export declare const Remark: string;
            export declare const EvaluationType: string;
        }

        ['Id', 'ExamId', 'ExamTitle', 'FirstKpiName', 'SecondKpiName', 'Content', 'ContentType', 'Score', 'Mark', 'Remark', 'EvaluationType'].forEach(x => (<any>Fields)[x] = x);
    }
}

