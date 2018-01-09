namespace hr.Evaluation {
    export class CompanyEvaluation {
        private container: JQuery;

        constructor(container: JQuery) {
            //this.InitView(container);
            this.container = container;
        }

        public init(): void {
            let examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
            let userId = parseInt(hr.Utils.getQueryString("p", window.location.href));
            //console.log(userId);
            let entity;
            Evaluation.CompanyEvaluationService.GetEvaluation({
                UserId: userId,
                ExamId: examId
            },
                (response => {
                    if (response && response.length > 0)
                        entity = response[0];
                    let html = "";
                    if (entity) {
                        html =
                            `<div class='container'>
                                <div class='row'>
                                    <div col-md='3'>你对公司的政策、制度、文化等方面有什么看法和意见？</div>
                                    <div col-md='10'><textarea id='content' class='form-control' disabled='disabled' style= 'width:100%;min-height:150px;'>${entity.EvaluationContent !== undefined ? entity.EvaluationContent : ''}</textarea ></div>
                                </div>
                                <div class='row text-center'>
                                    <a id='preva' href='SelfEvaluation?i=${examId}'><i class='fa fa-arrow-left' aria-hidden='true'></i>上一页</a>&nbsp;&nbsp;<button disabled='disabled' type="button" class="btn btn-primary" id='btnSave'>保存</button>&nbsp;&nbsp;<a id='nexta' href='SelfEvaluation1?i=${examId}'>下一页<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                                </div>
                                </div>
                            `;
                    } else {
                        html =
                            `<div class='container'>
                                <div class='row'>
                                    <div col-md='3'>你对公司的政策、制度、文化等方面有什么看法和意见？</div>
                                    <div col-md='10'><textarea id='content' class='form-control' style= 'width:100%;min-height:150px;'></textarea ></div>
                                </div>
                                <div class='row text-center'>
                                    <a id='preva' href='SelfEvaluation?i=${examId}'><i class='fa fa-arrow-left' aria-hidden='true'></i>上一页</a>&nbsp;&nbsp;<button type="button" class="btn btn-primary" id='btnSave'>保存</button>&nbsp;&nbsp;<a id='nexta' href='SelfEvaluation1?i=${examId}' class='hideele'>下一页<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                                </div>
                                </div>
                             `;
                    }
                    this.container.html(html);
                    let content = $("#content");
                    let preva = $("#preva");
                    let nexta = $("#nexta");
                    let btnSave = $("#btnSave");
                    preva.click((e) => {
                        e.preventDefault();
                        if (content.val() && content.attr("disabled") !== "disabled") {
                            Q.confirm("数据未保存，您确认离开此页面吗？", () => {
                                window.location.href = preva.attr("href");
                            });
                        } else {
                            window.location.href = preva.attr("href");
                        }
                    });

                    nexta.click((e) => {
                        e.preventDefault();
                        if (content.val() && content.attr("disabled") !== "disabled") {
                            Q.confirm("数据未保存，您确认离开此页面吗？", () => {
                                window.location.href = nexta.attr("href");
                            });
                        } else {
                            window.location.href = nexta.attr("href");
                        }
                    });

                    btnSave.click(() => {
                        if (!content.val()) {
                            Q.alert("内容不能为空");
                        } else {
                            Q.confirm("确认提交吗，提交之后就不能再进行修改？",
                                () => {
                                    Evaluation.CompanyEvaluationService.AddCompanyEvaluation({
                                        ExamId: examId,
                                        UserId: userId,
                                        Content: content.val(),
                                    },
                                        response => {
                                            Q.notifySuccess("保存成功");
                                            btnSave.attr("disabled", "disabled");
                                            content.attr("disabled", "disabled");
                                            nexta.removeClass("hideele").addClass("showele");
                                        });
                                });

                        }
                    });
                }) as any);

        }
    }
}
