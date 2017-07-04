namespace hr.Evaluation {
    export namespace EmployeeImportService {
        export const baseUrl = 'Evaluation/EmployeeImport';

        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const ExcelImport: string;
        }

        ['ExcelImport'].forEach(x => {
            (<any>EmployeeImportService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

