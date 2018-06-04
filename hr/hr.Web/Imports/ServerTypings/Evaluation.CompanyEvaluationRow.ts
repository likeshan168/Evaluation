namespace hr.Evaluation {
    export interface CompanyEvaluationRow {
        CompanyEvaluationId?: number;
        UserId?: number;
        ExamId?: number;
        EvaluationContent?: string;
        Username?: string;
        UserEmail?: string;
        Title?: string;
        DepartmentId?: number;
        DepartmentName?: string;
    }

    export namespace CompanyEvaluationRow {
        export const idProperty = 'CompanyEvaluationId';
        export const localTextPrefix = 'Evaluation.CompanyEvaluation';

        export namespace Fields {
            export declare const CompanyEvaluationId: string;
            export declare const UserId: string;
            export declare const ExamId: string;
            export declare const EvaluationContent: string;
            export declare const Username: string;
            export declare const UserEmail: string;
            export declare const Title: string;
            export declare const DepartmentId: string;
            export declare const DepartmentName: string;
        }

        ['CompanyEvaluationId', 'UserId', 'ExamId', 'EvaluationContent', 'Username', 'UserEmail', 'Title', 'DepartmentId', 'DepartmentName'].forEach(x => (<any>Fields)[x] = x);
    }
}

