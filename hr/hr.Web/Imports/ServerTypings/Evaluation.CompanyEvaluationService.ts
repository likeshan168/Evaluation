namespace hr.Evaluation {
    export namespace CompanyEvaluationService {
        export const baseUrl = 'Evaluation/CompanyEvaluation';

        export declare function Create(request: Serenity.SaveRequest<CompanyEvaluationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CompanyEvaluationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompanyEvaluationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompanyEvaluationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetEvaluation(request: Modules.Evaluation.CompanyEvaluation.CompanyEvaluationRequest, onSuccess?: (response: System.Collections.Generic.IEnumerable<CompanyEvaluationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function AddCompanyEvaluation(request: Modules.Evaluation.CompanyEvaluation.CompanyEvaluationRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Create: string;
            export declare const Update: string;
            export declare const Delete: string;
            export declare const Retrieve: string;
            export declare const List: string;
            export declare const GetEvaluation: string;
            export declare const AddCompanyEvaluation: string;
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'GetEvaluation', 'AddCompanyEvaluation'].forEach(x => {
            (<any>CompanyEvaluationService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

