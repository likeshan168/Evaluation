namespace hr.Evaluation {
    export namespace EvaluationResultDetailService {
        export const baseUrl = 'Evaluation/EvaluationResultDetail';

        export declare function Create(request: Serenity.SaveRequest<EvaluationResultDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EvaluationResultDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EvaluationResultDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EvaluationResultDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Add(request: AddEvaluationResultRequest<EvaluationResultDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Create: string;
            export declare const Update: string;
            export declare const Delete: string;
            export declare const Retrieve: string;
            export declare const List: string;
            export declare const Add: string;
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'Add'].forEach(x => {
            (<any>EvaluationResultDetailService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

