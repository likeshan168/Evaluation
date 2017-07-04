namespace hr.Evaluation {
    export interface UserEvaluationRelationRow {
        Id?: number;
        UserId?: number;
        UserList?: number[];
        ExamId?: number;
        Remark?: string;
        UserUsername?: string;
        ExamTitle?: string;
    }

    export namespace UserEvaluationRelationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'UserUsername';
        export const localTextPrefix = 'Evaluation.UserEvaluationRelation';

        export namespace Fields {
            export declare const Id: string;
            export declare const UserId: string;
            export declare const UserList: string;
            export declare const ExamId: string;
            export declare const Remark: string;
            export declare const UserUsername: string;
            export declare const ExamTitle: string;
        }

        ['Id', 'UserId', 'UserList', 'ExamId', 'Remark', 'UserUsername', 'ExamTitle'].forEach(x => (<any>Fields)[x] = x);
    }
}

