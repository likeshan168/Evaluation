namespace hr.Evaluation {
    export interface LeaderShipRow {
        UserId?: number;
        ParentUserId?: number;
        UserUsername?: string;
        ParentUsername?: string;
    }

    export namespace LeaderShipRow {
        export const idProperty = 'UserId';
        export const localTextPrefix = 'Evaluation.LeaderShip';

        export namespace Fields {
            export declare const UserId: string;
            export declare const ParentUserId: string;
            export declare const UserUsername: string;
            export declare const ParentUsername: string;
        }

        ['UserId', 'ParentUserId', 'UserUsername', 'ParentUsername'].forEach(x => (<any>Fields)[x] = x);
    }
}

