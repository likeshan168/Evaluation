namespace hr.Archive {
    export namespace ExamArchiveService {
        export const baseUrl = 'Archive/ExamArchive';

        export declare function Create(request: Serenity.SaveRequest<ExamArchiveRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ExamArchiveRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExamArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExamArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetExamArchiveList(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<Evaluation.ExamRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetSelfEvaluation(request: Evaluation.EvaluationItemRequest, onSuccess?: (response: System.Collections.Generic.IEnumerable<ExamArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetEvaluation1(request: Evaluation.EvaluationItemRequest, onSuccess?: (response: System.Collections.Generic.IEnumerable<ExamArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetEvaluation2(request: Evaluation.EvaluationItemRequest, onSuccess?: (response: System.Collections.Generic.IEnumerable<ExamArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Create: string;
            export declare const Update: string;
            export declare const Delete: string;
            export declare const Retrieve: string;
            export declare const List: string;
            export declare const GetExamArchiveList: string;
            export declare const GetSelfEvaluation: string;
            export declare const GetEvaluation1: string;
            export declare const GetEvaluation2: string;
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'GetExamArchiveList', 'GetSelfEvaluation', 'GetEvaluation1', 'GetEvaluation2'].forEach(x => {
            (<any>ExamArchiveService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

