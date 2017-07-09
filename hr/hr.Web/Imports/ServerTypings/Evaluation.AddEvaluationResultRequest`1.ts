namespace hr.Evaluation {
    export interface AddEvaluationResultRequest<T> extends Serenity.ServiceRequest {
        Entities?: T[];
    }
}

