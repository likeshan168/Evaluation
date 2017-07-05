namespace hr.Evaluation {
    export class SelfEvaluation {
        private container: JQuery;
        constructor(container: JQuery) {
            //this.InitView(container);
            this.container = container;
        }

        public init(): void {
            //console.log(this.getQueryString("i", window.location.href))
            let examId = parseInt(this.getQueryString("i", window.location.href));
            let res = Evaluation.EvaluationItemService.GetSelfEvaluationByExam({ ExamId: examId }, (response) => {
                let html = `<table>
                                   <tr>
                                        <th colspan='5' class='text-center' style='font-size:18px'>
                                            自我评价
                                        </th>
                                    </tr>
                                `;
                if (response !== null) {
                    let count = res.responseJSON.length;

                    if (res.responseJSON.length !== 0) {
                        res.responseJSON.forEach((item, index) => {
                            html += `<tr>`;
                            if (index == 0) {
                                html += `<td rowspan='${count}' style='vertical-align: middle;width:80px'>${item.FirstKpiName}</td>`;
                            }
                            html += `<td width='80px'>${item.SecondKpiName}</td>
                                    <td width='150px'>${item.Content}</td>`;
                            if (item.ContentType === 1) {
                                //输入框
                                html += `<td>${item.Mark}<br/><textarea style='width:100%;min-height:150px;'></textarea></td>`
                            }
                            html += `<td style='width:150px;'>${item.Remark}</td>`;
                            html += "</tr>";
                        })
                        html += `<tr><td colspan='5' class='text-center'><a href='SelfEvaluation1'><i class="fa fa-arrow-right" aria-hidden="true"></i>下一页</a></td><tr></table>`
                    } else {
                        html += "<tr><td colspan='5'>请添加或启用自我评价内容</td></tr>";
                        html += `<tr><td colspan='5' class='text-center'><a href='SelfEvaluation1'><i class="fa fa-arrow-right" aria-hidden="true"></i>下一页</a></td><tr></table>`
                    }

                } else {
                    html += "<tr><td colspan='5'>请添加或启用自我评价内容</td></tr>";
                    html += `<tr><td colspan='5' class='text-center'><a href='SelfEvaluation1'><i class="fa fa-arrow-right" aria-hidden="true"></i>下一页</a></td><tr></table>`
                }
                this.container.html(html);
            });
        }

        private getQueryString(field, url) {
            var href = url ? url : window.location.href;
            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
            var string = reg.exec(href);
            return string ? string[1] : null;
        }
    }
}
