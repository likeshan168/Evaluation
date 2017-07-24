namespace hr.Evaluation {
    export class EvaluationItemPreviewSelfEvaluation0 {
        private container: JQuery;
        constructor(container: JQuery) {
            //this.InitView(container);
            this.container = container;
        }

        public init(): void {
            let examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
            let res = Evaluation.EvaluationItemService.GetSelfEvaluation({ ExamId: examId }, (response) => {
                let html = `<div class='row'><table class='table table-bordered table-condensed'>
                                    <tr>
                                        <th class='text-center' style='font-size:18px;' colspan='5'>他人评价</th>
                                     </tr>
                                    <tr>
                                        <td style='width:80px;'>考核项目</td>
                                        <td style='width:80px;'>评价内容</td>
                                        <td colspan='2' style='min-width:400px;'>评价标准</td>
                                        <td style='width:80px;'>得分</td>
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
                                html += `<td>${item.Mark}</td>`
                            }
                            html += `<td><input type="text" /></td></tr>`;
                        })
                        html += `<tr><td colspan='5' class='text-center'><a href='PreviewSelfEvaluation?i=${examId}'><i class='fa fa-arrow-left' aria-hidden='true'></i>上一页</a>&nbsp;&nbsp;&nbsp;<a href='PreviewEvaluation?i=${examId}'><i class="fa fa-arrow-right" aria-hidden="true"></i>下一页</a></td><tr></table>`
                    } else {
                        html += "<tr><td colspan='5'>请添加或启用自我评价内容</td></tr>";
                        html += `<tr><td colspan='5' class='text-center'><a href='PreviewSelfEvaluation?i=${examId}'><i class='fa fa-arrow-left' aria-hidden='true'></i>上一页</a>&nbsp;&nbsp;&nbsp;<a href='PreviewEvaluation?i=${examId}'><i class="fa fa-arrow-right" aria-hidden="true"></i>下一页</a></td><tr></table>`
                    }

                } else {
                    html += "<tr><td colspan='5'>请添加或启用自我评价内容</td></tr>";
                    html += `<tr><td colspan='5' class='text-center'><a href='PreviewSelfEvaluation?i=${examId}'><i class='fa fa-arrow-left' aria-hidden='true'></i>上一页</a>&nbsp;&nbsp;&nbsp;<a href='PreviewEvaluation?i=${examId}'><i class="fa fa-arrow-right" aria-hidden="true"></i>下一页</a></td><tr></table></div>`
                }
                this.container.html(html);
            });
        }
    }
}
