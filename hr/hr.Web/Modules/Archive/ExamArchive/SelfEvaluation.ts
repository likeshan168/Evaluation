namespace hr.Archive {
    export class SelfEvaluation {
        private container: JQuery;
        constructor(container: JQuery) {
            //this.InitView(container);
            this.container = container;
        }

        public init(): void {
            let examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
            
            ExamArchiveService.GetExamArchiveList({}, response => {
                console.log(response);
                let opts = "<select id='exam_list' class='form-control'><option value='0'>请选择考核标题</option>";
                response.Entities.forEach((value, index) => {
                    if (value.Id === examId) {
                        opts += `<option value=${value.ExamId} selected>${value.ExamTitle}</option>`;
                    } else {
                        opts += `<option value=${value.ExamId}>${value.ExamTitle}</option>`;
                    }
                })
                opts += "</select><div id='exam_detail' class='row'></div>";
                this.container.html(opts);
                let slt = $('#exam_list');
                let exam_detail = $('#exam_detail');
                if (examId) {
                    this.initHtml(exam_detail, examId);
                }
                slt.change(() => {
                    let examId = parseInt(slt.val());
                    if (examId === 0) {
                        Q.notifyWarning('请选择考核标题');
                    } else {
                        this.initHtml(exam_detail, examId);
                    }
                });
            });

        }

        private initHtml(container: JQuery, examId: number): void {
            let res = ExamArchiveService.GetSelfEvaluation({ ExamId: examId }, (response) => {
                let html = `<table>
                                   <tr>
                                        <th colspan='4' class='text-center' style='font-size:18px'>
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
                            //html += `<td style='width:150px;'>${item.Remark}</td>`;
                            html += "</tr>"
                        })
                        html += `<tr><td colspan='4' class='text-center'><a href='Evaluation1?i=${examId}'><i class="fa fa-arrow-right" aria-hidden="true"></i>下一页</a></td><tr></table>`
                    } else {
                        html += "<tr><td colspan='4'>请添加或启用自我评价内容</td></tr>";
                        html += `<tr><td colspan='4' class='text-center'><a href='Evaluation1?i=${examId}'><i class="fa fa-arrow-right" aria-hidden="true"></i>下一页</a></td><tr></table>`
                    }

                } else {
                    html += "<tr><td colspan='4'>请添加或启用自我评价内容</td></tr>";
                    html += `<tr><td colspan='4' class='text-center'><a href='Evaluation1?i=${examId}'><i class="fa fa-arrow-right" aria-hidden="true"></i>下一页</a></td><tr></table>`
                }
                container.html(html);
            });
        }
    }
}
