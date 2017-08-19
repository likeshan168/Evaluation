namespace hr.Administration {
    export interface UserRoleBatchUpdateRequest extends Serenity.ServiceRequest {
        UserIds?: number[];
        Roles?: number[];
    }
}

