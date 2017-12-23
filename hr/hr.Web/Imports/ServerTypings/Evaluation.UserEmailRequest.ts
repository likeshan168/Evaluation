namespace hr.Evaluation {
    export interface UserEmailRequest extends Serenity.ServiceRequest {
        Title?: string;
        UserName?: string;
        Url?: string;
        Email?: string;
        EvaluationUserName?: string;
    }
}

