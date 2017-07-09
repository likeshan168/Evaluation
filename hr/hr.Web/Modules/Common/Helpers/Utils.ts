namespace hr.Utils {
    export function getQueryString(field, url) {
        var href = url ? url : window.location.href;
        var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
        var string = reg.exec(href);
        return string ? string[1] : null;
    }

    export function getCurrentUserId() {
        hr.Evaluation.ToDoListService.GetCurrentUserId(null, response => {
            return response;
        }, {
                async: false
            });
    }
}