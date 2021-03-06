﻿namespace hr.Evaluation {
    export namespace UserEvaluationRelationService {
        export const baseUrl = 'Evaluation/UserEvaluationRelation';

        export declare function Create(request: Serenity.SaveRequest<UserEvaluationRelationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<UserEvaluationRelationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserEvaluationRelationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserEvaluationRelationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function BatchSendEmail(request: BatchEmailRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function BatchDelete(request: BatchDeleteRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Create: string;
            export declare const Update: string;
            export declare const Delete: string;
            export declare const Retrieve: string;
            export declare const List: string;
            export declare const BatchSendEmail: string;
            export declare const BatchDelete: string;
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'BatchSendEmail', 'BatchDelete'].forEach(x => {
            (<any>UserEvaluationRelationService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

