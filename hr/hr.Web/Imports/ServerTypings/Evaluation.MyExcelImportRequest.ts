namespace hr.Evaluation {
    export interface MyExcelImportRequest extends Serenity.ServiceRequest {
        ExamId?: number;
        FileName?: string;
    }
}

