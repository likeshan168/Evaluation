﻿
namespace hr.Evaluation {
    export interface UserToUserViewRow {
        Id?: number;
        UserId?: number;
        ExamId?: number;
        EvaluationUserId?: number;
        Email?: string;
        Username?: string;
    }

    export namespace UserToUserViewRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Evaluation.UserToUserView';

        export namespace Fields {
            export declare const Id;
            export declare const UserId;
            export declare const ExamId;
            export declare const EvaluationUserId;
            export declare const Email;
            export declare const Username;
        }

        ['Id', 'UserId', 'ExamId', 'EvaluationUserId', 'Email', 'Username'].forEach(x => (<any>Fields)[x] = x);
    }
}

