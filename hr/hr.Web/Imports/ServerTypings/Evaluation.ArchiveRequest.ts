namespace hr.Evaluation {
    export interface ArchiveRequest extends Serenity.ServiceRequest {
        ExamId?: number;
        Title?: string;
    }
}

