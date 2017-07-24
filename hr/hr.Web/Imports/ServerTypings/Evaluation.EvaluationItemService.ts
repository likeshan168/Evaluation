namespace hr.Evaluation {
    export namespace EvaluationItemService {
        export const baseUrl = 'Evaluation/EvaluationItem';

        export declare function Create(request: Serenity.SaveRequest<EvaluationItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EvaluationItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EvaluationItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EvaluationItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetSelfEvaluation(request: EvaluationItemRequest, onSuccess?: (response: System.Collections.Generic.IEnumerable<EvaluationItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetEvaluation1(request: EvaluationItemRequest, onSuccess?: (response: System.Collections.Generic.IEnumerable<EvaluationItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetEvaluation2(request: EvaluationItemRequest, onSuccess?: (response: System.Collections.Generic.IEnumerable<EvaluationItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetSelfEvaluationByExam(request: EvaluationItemRequest, onSuccess?: (response: System.Collections.Generic.IEnumerable<EvaluationItemViewModel>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetSelfEvaluation1ByExam(request: EvaluationItemRequest, onSuccess?: (response: System.Collections.Generic.IEnumerable<EvaluationItemViewModel>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetEvaluation1ByExam(request: EvaluationItemRequest, onSuccess?: (response: System.Collections.Generic.IEnumerable<EvaluationItemViewModel>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetEvaluation2ByExam(request: EvaluationItemRequest, onSuccess?: (response: System.Collections.Generic.IEnumerable<EvaluationItemViewModel>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetUserToUsers(request: Serenity.ServiceRequest, onSuccess?: (response: System.Collections.Generic.IEnumerable<UserViewModel>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Create: string;
            export declare const Update: string;
            export declare const Delete: string;
            export declare const Retrieve: string;
            export declare const List: string;
            export declare const GetSelfEvaluation: string;
            export declare const GetEvaluation1: string;
            export declare const GetEvaluation2: string;
            export declare const GetSelfEvaluationByExam: string;
            export declare const GetSelfEvaluation1ByExam: string;
            export declare const GetEvaluation1ByExam: string;
            export declare const GetEvaluation2ByExam: string;
            export declare const GetUserToUsers: string;
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'GetSelfEvaluation', 'GetEvaluation1', 'GetEvaluation2', 'GetSelfEvaluationByExam', 'GetSelfEvaluation1ByExam', 'GetEvaluation1ByExam', 'GetEvaluation2ByExam', 'GetUserToUsers'].forEach(x => {
            (<any>EvaluationItemService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

