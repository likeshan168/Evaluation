namespace hr.Evaluation {
    export namespace LeaderShipService {
        export const baseUrl = 'Evaluation/LeaderShip';

        export declare function Create(request: Serenity.SaveRequest<LeaderShipRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<LeaderShipRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LeaderShipRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LeaderShipRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function CheckCurrentUserIsParent(request: UserRequest, onSuccess?: (response: System.Boolean) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Create: string;
            export declare const Update: string;
            export declare const Delete: string;
            export declare const Retrieve: string;
            export declare const List: string;
            export declare const CheckCurrentUserIsParent: string;
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'CheckCurrentUserIsParent'].forEach(x => {
            (<any>LeaderShipService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

