namespace hr.Evaluation {
    export namespace UserEvaluationRelationExcelImportService {
        export const baseUrl = 'Evaluation/UserEvaluationRelationExcelImport';

        export declare function ExcelImport(request: MyExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const ExcelImport: string;
        }

        ['ExcelImport'].forEach(x => {
            (<any>UserEvaluationRelationExcelImportService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

