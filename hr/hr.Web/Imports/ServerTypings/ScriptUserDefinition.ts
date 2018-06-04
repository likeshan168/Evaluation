namespace hr {
    export interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: { [key: string]: boolean };
        DepartmentId?: number;
        DepartmentName?: string;
    }
}

