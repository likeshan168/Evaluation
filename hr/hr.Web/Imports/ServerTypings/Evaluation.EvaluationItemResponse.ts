namespace hr.Evaluation {
    export interface EvaluationItemResponse extends Serenity.ServiceResponse {
        IsSelfEvaluated?: boolean;
        IsCompanyEvaluated?: boolean;
        Items?: EvaluationItemViewModel[];
    }
}

