namespace hr.Evaluation {
    export interface ExamRow {
        Id?: number;
        Title?: string;
        StartDate?: string;
        EndDate?: string;
        EvaluationIds?: string;
        IsEnabled?: boolean;
        Remark?: string;
    }

    export namespace ExamRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Evaluation.Exam';
        export const lookupKey = 'Evaluation.Exam';

        export function getLookup(): Q.Lookup<ExamRow> {
            return Q.getLookup<ExamRow>('Evaluation.Exam');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const Title: string;
            export declare const StartDate: string;
            export declare const EndDate: string;
            export declare const EvaluationIds: string;
            export declare const IsEnabled: string;
            export declare const Remark: string;
        }

        ['Id', 'Title', 'StartDate', 'EndDate', 'EvaluationIds', 'IsEnabled', 'Remark'].forEach(x => (<any>Fields)[x] = x);
    }
}

