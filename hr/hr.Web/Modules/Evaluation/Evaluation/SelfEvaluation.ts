namespace hr.Evaluation {
    export class SelfEvaluation {
        private container: JQuery;
        constructor(container: JQuery) {
            //this.InitView(container);
            this.container = container;
        }
        //TODO: 考虑评估过期的情况
        public init(): void {
            //console.log(Utils.getCurrentUserId());
            hr.Evaluation.ToDoListService.GetCurrentUserId(null, userId => {
                let examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
                let res = Evaluation.EvaluationItemService.GetSelfEvaluationByExam({ ExamId: examId, UserId: userId }, (response) => {
                    let html = `<table>
                                   <tr>
                                        <th colspan='5' class='text-center' style='font-size:18px'>
                                            <span class="caret"></span>自我评价
                                        </th>
                                    </tr>
                                `;
                    if (response !== null) {
                        let count = res.responseJSON.length;

                        if (res.responseJSON.length !== 0) {
                            res.responseJSON.forEach((item, index) => {
                                html += `<tr>`;
                                if (index == 0) {
                                    html += `<td rowspan='${count}' style='vertical-align: middle;width:80px'><p>${item.FirstKpiName}</p></td>`;
                                }
                                html += `<td width='80px'><p>${item.SecondKpiName}</p></td>
                                    <td width='150px'><p>${item.Content}</p></td>`;
                                if (item.ContentType === 1) {
                                    //输入框
                                    if (Q.isEmptyOrNull(item.InputContent)) {
                                        html += `<td>${item.Mark}<br/><textarea data-itemid='${item.Id}' class='form-control' style= 'width:100%;min-height:150px;'>${item.InputContent !== undefined ? item.InputContent : ''}</textarea></td>`
                                    } else {
                                        html += `<td>${item.Mark}<br/><textarea disabled='disabled' data-itemid='${item.Id}' class='form-control' style= 'width:100%;min-height:150px;'>${item.InputContent !== undefined ? item.InputContent : ''}</textarea></td>`
                                    }
                                }
                                html += `<td style='width:150px;'><small>${item.Remark}</small></td>`;
                                html += "</tr>";
                            })
                            html += `<tr><td colspan='5' class='text-center'><button type="button" class="btn btn-primary">提交</button>&nbsp;&nbsp;&nbsp;<a href='SelfEvaluation1?i=${examId}' id='nexta' class='hideele'>开始评价他人<i class="fa fa-arrow-right" aria-hidden="true"></i></a></td><tr></table>`
                        } else {
                            html += "<tr><td colspan='5'>管理员还未添加或启用自我评价内容</td></tr>";
                            html += `<tr><td colspan='5' class='text-center'><a href='SelfEvaluation1?i=${examId}'>开始评价他人<i class="fa fa-arrow-right" aria-hidden="true"></i></a></td><tr></table>`
                        }

                    } else {
                        html += "<tr><td colspan='5'>管理员还未添加或启用自我评价内容</td></tr>";
                        html += `<tr><td colspan='5' class='text-center'><a href='SelfEvaluation1?i=${examId}'>开始评价他人<i class="fa fa-arrow-right" aria-hidden="true"></i></a></td><tr></table>`
                    }
                    this.container.html(html);
                    let saveBtn = $("button.btn-primary");
                    let inputs = $("textarea.form-control");
                    let nexta = $("#nexta");
                    if (inputs.attr("disabled") === "disabled") {
                        nexta.removeClass('hideele').addClass('showele');
                        saveBtn.addClass('hideele');
                    }
                    saveBtn.click((e) => {
                        let flag = true;
                        inputs.each((index, ele) => {
                            //console.log($(ele).val().length);
                            if (Q.isEmptyOrNull($(ele).val())) {
                                //console.log("empty");
                                Q.notifyError("请将自我评价填写完整");
                                flag = false;
                                return;
                            }
                        });
                        if (!flag) {
                            return;
                        }
                        let obj = new Object();
                        obj['UserId'] = userId;
                        obj['ExamId'] = examId;
                        Q.confirm("提交自我评价的内容吗?,一旦提交将不能进行修改", () => {
                            hr.Evaluation.UserToUserViewService.List({
                                EqualityFilter: obj
                            }, res => {
                                console.log(res);
                                let arr = [];
                                res.Entities.forEach((item, i) => {
                                    inputs.each((index, ele) => {
                                        let tmpEle = $(ele);
                                        console.log(tmpEle.val())
                                        arr.push({
                                            UserId: userId,
                                            ExamId: examId,
                                            InputContent: tmpEle.val(),
                                            EvaluationItemId: tmpEle.data("itemid"),
                                            EvaluationUserId: item.EvaluationUserId
                                        });
                                    });
                                })

                                hr.Evaluation.EvaluationResultDetailService.Add({
                                    Entities: arr,
                                    IsComplete: false
                                }, response => {
                                    Q.notifySuccess("提交成功");
                                    nexta.removeClass("hideele").addClass("showele");
                                    saveBtn.addClass('hideele');
                                    inputs.attr('disabled', 'disabled');
                                });
                            })

                        });
                    });
                });
            });

        }
    }
}
