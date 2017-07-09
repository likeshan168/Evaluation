namespace hr.Evaluation {
    export interface EvaluationItemViewModel {
        Id?: number;
        OrderNo?: number;
        FirstKpiName?: string;
        SecondKpiName?: string;
        Content?: string;
        ContentType?: ContentType;
        Score?: number;
        Mark?: string;
        IsEnabled?: boolean;
        Remark?: string;
        InputContent?: string;
        FScore?: number;
    }
}

