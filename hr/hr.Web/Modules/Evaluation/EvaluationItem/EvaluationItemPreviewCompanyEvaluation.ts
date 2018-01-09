namespace hr.Evaluation {
    export class EvaluationItemPreviewCompanyEvaluation {
        private container: JQuery;
        constructor(container: JQuery) {
            //this.InitView(container);
            this.container = container;
        }

        public init(): void {
            let examId = parseInt(Utils.getQueryString("i", window.location.href));
            let html =
                `<div class='container'>
                                <div class='row'>
                                    <div col-md='3'>你对公司的政策、制度、文化等方面有什么看法和意见？</div>
                                    <div col-md='10'><textarea id='content' class='form-control' style= 'width:100%;min-height:150px;'></textarea ></div>
                                </div>
                                <div class='row text-center'>
                                    <a id='preva' href='PreviewSelfEvaluation?i=${examId}'><i class='fa fa-arrow-left' aria-hidden='true'></i>上一页</a>&nbsp;&nbsp;<a id='nexta' href='PreviewSelfEvaluation0?i=${examId}'>下一页<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                                </div>
                                </div>
                             `;
            this.container.html(html);
        }
    }
}

