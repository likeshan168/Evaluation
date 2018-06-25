namespace hr.Evaluation {
    export interface SelfEvaluationResultRow {
        Id?: number;
        Title?: string;
        Content?: string;
        InputContent?: string;
        Username?: string;
        DepartmentName?: string;
    }

    export namespace SelfEvaluationResultRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Content';
        export const localTextPrefix = 'Evaluation.SelfEvaluationResult';
        export const lookupKey = 'SelfEvaluationResult.DepartmentName';

        export function getLookup(): Q.Lookup<SelfEvaluationResultRow> {
            return Q.getLookup<SelfEvaluationResultRow>('SelfEvaluationResult.DepartmentName');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const Title: string;
            export declare const Content: string;
            export declare const InputContent: string;
            export declare const Username: string;
            export declare const DepartmentName: string;
        }

        ['Id', 'Title', 'Content', 'InputContent', 'Username', 'DepartmentName'].forEach(x => (<any>Fields)[x] = x);
    }
}

