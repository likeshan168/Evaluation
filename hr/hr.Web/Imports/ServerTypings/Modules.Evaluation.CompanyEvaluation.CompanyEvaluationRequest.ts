namespace hr.Modules.Evaluation.CompanyEvaluation {
    export interface CompanyEvaluationRequest extends Serenity.ServiceRequest {
        UserId?: number;
        ExamId?: number;
        Content?: string;
    }
}

