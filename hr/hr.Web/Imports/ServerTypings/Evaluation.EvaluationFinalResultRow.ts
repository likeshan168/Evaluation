namespace hr.Evaluation {
    export interface EvaluationFinalResultRow {
        Id?: number;
        UserId?: number;
        ExamId?: number;
        Title?: string;
        UserName?: string;
        TotalScore?: number;
        Grade?: string;
        Email?: string;
        DepartmentId?: number;
        DepartmentName?: string;
    }

    export namespace EvaluationFinalResultRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Evaluation.EvaluationFinalResult';
        export const lookupKey = 'EvaluationFinalResult.ExamTitle';

        export function getLookup(): Q.Lookup<EvaluationFinalResultRow> {
            return Q.getLookup<EvaluationFinalResultRow>('EvaluationFinalResult.ExamTitle');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const UserId: string;
            export declare const ExamId: string;
            export declare const Title: string;
            export declare const UserName: string;
            export declare const TotalScore: string;
            export declare const Grade: string;
            export declare const Email: string;
            export declare const DepartmentId: string;
            export declare const DepartmentName: string;
        }

        ['Id', 'UserId', 'ExamId', 'Title', 'UserName', 'TotalScore', 'Grade', 'Email', 'DepartmentId', 'DepartmentName'].forEach(x => (<any>Fields)[x] = x);
    }
}

