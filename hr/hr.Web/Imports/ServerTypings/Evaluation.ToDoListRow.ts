namespace hr.Evaluation {
    export interface ToDoListRow {
        Id?: number;
        UserId?: number;
        Title?: string;
        Content?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
    }

    export namespace ToDoListRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Evaluation.ToDoList';

        export namespace Fields {
            export declare const Id: string;
            export declare const UserId: string;
            export declare const Title: string;
            export declare const Content: string;
            export declare const UserUsername: string;
            export declare const UserDisplayName: string;
            export declare const UserEmail: string;
            export declare const UserSource: string;
            export declare const UserPasswordHash: string;
            export declare const UserPasswordSalt: string;
            export declare const UserLastDirectoryUpdate: string;
            export declare const UserUserImage: string;
            export declare const UserInsertDate: string;
            export declare const UserInsertUserId: string;
            export declare const UserUpdateDate: string;
            export declare const UserUpdateUserId: string;
            export declare const UserIsActive: string;
        }

        ['Id', 'UserId', 'Title', 'Content', 'UserUsername', 'UserDisplayName', 'UserEmail', 'UserSource', 'UserPasswordHash', 'UserPasswordSalt', 'UserLastDirectoryUpdate', 'UserUserImage', 'UserInsertDate', 'UserInsertUserId', 'UserUpdateDate', 'UserUpdateUserId', 'UserIsActive'].forEach(x => (<any>Fields)[x] = x);
    }
}

