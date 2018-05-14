namespace hr.Evaluation {
    export class SelfEvaluation {
        private container: JQuery;
        private saveBtn: JQuery;
        private inputs: JQuery;
        private nexta: JQuery;
        private saveMsg: JQuery;
        constructor(container: JQuery) {
            //this.InitView(container);
            this.container = container;
        }
        //TODO: 考虑评估过期的情况
        public init(): void {
            //console.log(Utils.getCurrentUserId());
            hr.Evaluation.ToDoListService.GetCurrentUserId(null, userId => {
                let examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
                Evaluation.EvaluationItemService.GetSelfEvaluationByExam({ ExamId: examId, UserId: userId }, (response) => {
                    let html = `<table>
                                   <tr>
                                        <th colspan='5' class='text-center' style='font-size:18px'>
                                            自我评价 &nbsp;&nbsp;&nbsp;<span id='saveMsg' style='display: none; color: green'>已保存</span>
                                        </th>
                                    </tr>
                                `;
                    if (response !== null && response.Items !== null) {
                        let count = response.Items.length;
                        if (response.Items.length !== 0) {
                            response.Items.forEach((item, index) => {
                                html += `<tr>`;
                                if (index == 0) {
                                    html += `<td rowspan='${count}' style='vertical-align: middle;width:80px'><p>${item
                                        .FirstKpiName}</p></td>`;
                                }
                                html += `<td width='80px'><p>${item.SecondKpiName}</p></td>
                                    <td width='150px'><p>${item.Content}</p></td>`;
                                if (item.ContentType === 1) {
                                    //输入框
                                    html += `<td>${item.Mark}<br/><textarea data-itemid='${item.Id
                                        }' class='form-control' style= 'width:100%;min-height:150px;'>${
                                        item.InputContent !== undefined ? item.InputContent : ''}</textarea></td>`;
                                }
                                //html += `<td style='width:150px;'><small>${item.Remark}</small></td>`;
                                html += "</tr>";
                            });
                            html +=
                                `<tr><td colspan='5' class='text-center'><button type="button" class="btn btn-primary">提交</button>&nbsp;&nbsp;&nbsp;<a href='CompanyEvaluation?i=${
                                examId
                                }&p=${userId}' id='nexta' class='hideele'>下一页<i class="fa fa-arrow-right" aria-hidden="true"></i></a></td><tr></table>`;
                        } else {
                            html += "<tr><td colspan='5'>管理员未添加或启用您的自我评价内容</td></tr>";
                            html += `<tr><td colspan='5' class='text-center'><a href='SelfEvaluation1?i=${examId
                                }'>下一页<i class="fa fa-arrow-right" aria-hidden="true"></i></a></td><tr></table>`;
                        }

                    } else {
                        html += "<tr><td colspan='5'>管理员未添加或启用您的自我评价内容</td></tr>";
                        html += `<tr><td colspan='5' class='text-center'><a href='SelfEvaluation1?i=${examId
                            }'>下一页<i class="fa fa-arrow-right" aria-hidden="true"></i></a></td><tr></table>`;
                    }
                    this.container.html(html);
                    this.saveMsg = $("#saveMsg");
                    this.saveBtn = $("button.btn-primary");
                    this.inputs = $("textarea.form-control");
                    //判断是否所有的input都有内容，如果是，则说明已经进行过提交了，不能再进行编辑了
                    if (response.IsSelfEvaluated) {
                        this.inputs.attr('disabled', 'disabled');
                    }
                    this.nexta = $("#nexta");
                    if (this.inputs.attr("disabled") === "disabled") {
                        this.nexta.removeClass('hideele').addClass('showele');
                        this.saveBtn.addClass('hideele');
                    }
                    this.saveBtn.click((e) => {
                        let flag = true;
                        this.inputs.each((index, ele) => {
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

                        Q.confirm("提交自我评价的内容吗?,一旦提交将不能进行修改", () => {
                            this.saveData(userId, examId);
                        });
                    });

                    this.inputs.on('keypress', (e) => {
                       setTimeout(() => {
                            console.log('interval');
                            this.saveData(userId, examId, $(e.target));
                        }, 3000);
                    });
                });
            });

        }
        //保存自我评价的内容
        private saveData(userId: number, examId: number, currentInput: JQuery = null): void {
            let obj = new Object();
            obj['UserId'] = userId;
            obj['ExamId'] = examId;
            hr.Evaluation.UserToUserViewService.List({
                EqualityFilter: obj
            }, res => {
                let arr = [];
                if (currentInput !== null) {
                    res.Entities.forEach((item, i) => {
                        arr.push({
                            UserId: userId,
                            ExamId: examId,
                            InputContent: currentInput.val(),
                            EvaluationItemId: currentInput.data("itemid"),
                            EvaluationUserId: item.EvaluationUserId,
                        });
                    })
                } else {
                    res.Entities.forEach((item, i) => {
                        this.inputs.each((index, ele) => {
                            let tmpEle = $(ele);
                            arr.push({
                                UserId: userId,
                                ExamId: examId,
                                InputContent: tmpEle.val(),
                                EvaluationItemId: tmpEle.data("itemid"),
                                EvaluationUserId: item.EvaluationUserId
                            });
                        });
                    })
                }


                hr.Evaluation.EvaluationResultDetailService.Add({
                    Entities: arr,
                    IsComplete: false,
                    IsSelfEvaluationComplete: currentInput == null ? true : false
                }, response => {
                    if (currentInput === null) {
                        Q.notifySuccess("提交成功");
                        this.nexta.removeClass("hideele").addClass("showele");
                        this.saveBtn.addClass('hideele');
                        this.inputs.attr('disabled', 'disabled');
                    } else {
                        this.saveMsg.fadeIn(1000).fadeOut(3000);
                    }
                });
            });
        }
    }
}
