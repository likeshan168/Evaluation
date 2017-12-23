namespace hr.Evaluation {
    export class Evaluation2 {
        private container: JQuery;

        constructor(container: JQuery) {
            //this.InitView(container);
            this.container = container;
        }

        public init(): void {
            let examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
            let userId = parseInt(hr.Utils.getQueryString("p", window.location.href));
            let res = Evaluation.EvaluationItemService.GetEvaluation2ByExam({
                ExamId: examId,
                UserId: userId
            }, (response) => {
                let grps = response.reduce(function (result, current) {
                    result[current.FirstKpiName] = result[current.FirstKpiName] || [];
                    result[current.FirstKpiName].push(current);
                    return result;
                }, {});
                let html = `<table>
                                <tr>
                                    <th class='text-center' style='font-size:18px;' colspan='7'>对&nbsp;&nbsp;<span style="color:#00a7d0">${$.cookie('evaluated_user')}</span>&nbsp;&nbsp;进行评价</th>
                                </tr>
                                    <tr>
                                        <td style='width:80px;'>考核项目</td>
                                        <td style='width:80px;'>评价内容</td>
                                        <td colspan='5' style='min-width:400px;'>评价标准</td>
                                    </tr>
                                `;
                let subarr;
                let toprowpan;
                let subGrps;
                let totalRows = 0;
                for (let pro in grps) {
                    //console.log(pro);
                    subGrps = grps[pro].reduce((result, current) => {
                        result[current.SecondKpiName] = result[current.SecondKpiName] || [];
                        result[current.SecondKpiName].push(current);
                        return result;
                    }, {});
                    let subKeys = [];
                    for (let subpro in subGrps) {
                        subKeys.push(subpro);
                    }
                    toprowpan = subKeys.length;
                    totalRows += toprowpan;
                    let colspan = 5;
                    let i = 0;

                    for (let subpro in subGrps) {
                        subarr = subGrps[subpro];
                        html += '<tr class="text-notdone">';
                        if (i === 0) {
                            html += `<td rowspan='${toprowpan}' style='vertical-align: middle;width:80px'>${pro}</td>`;
                        }
                        i++;
                        html += `<td style='vertical-align:middle;'>${subpro}</td>`;
                        $.each(subarr, (index, value) => {
                            if (value.FScore) {
                                html += `<td style='vertical-align:bottom;'><label style="font-weight: normal">${value.Content}(<span style='color: #1a2d27;'>${value.Score}分</span>)<br/><input data-itemid='${value.Id}' type="radio" checked='checked' name='${value.SecondKpiName}' value='${value.Score}' style='width:100%'/></label>  </td>`
                            } else {
                                html += `<td style='vertical-align:bottom;'><label style="font-weight: normal">${value.Content}(<span style='color: #1a2d27;'>${value.Score}分</span>)<br/><input data-itemid='${value.Id}' type="radio" name='${value.SecondKpiName}' value='${value.Score}' style='width:100%'/></label> </td>`
                            }

                        });
                    }
                }
                html += `<tr><td colspan='7' class='text-center'><a id='preva' href='Evaluation1?i=${examId}&p=${userId}'><i class='fa fa-arrow-left' aria-hidden='true'></i>上一页</a>&nbsp;&nbsp;&nbsp;<button id='btnSave' type="button" class="btn btn-primary" id='btnSave'>保存</button></td><tr></table>`;

                this.container.html(html);

                let btnSave = $("#btnSave");
                let radio = $("input[type='radio']");
                let preva = $('#preva');

                let checkedRd = $("input[type='radio']:checked");
                //已经评价过之后就不能再修改
                if (checkedRd.length != 0) {
                    radio.attr('disabled', 'disabled');
                    btnSave.addClass('hidden');
                }
                checkedRd.each((index, ele) => {
                    $(ele).parent().parent().parent().removeClass("text-notdone").addClass("text-done");
                });
                btnSave.click(e => {
                    //console.log(subarr);
                    checkedRd = $("input[type='radio']:checked");
                    if (checkedRd.length < totalRows) {
                        Q.notifyError('还有未评价的项目，请评价完整后再进行保存');
                        return;
                    }
                    else {
                        let entities = [];
                        checkedRd.each((index, ele) => {
                            entities.push({
                                EvaluationItemId: $(ele).data('itemid'),
                                ExamId: examId,
                                UserId: userId,
                                Score: parseInt($(ele).val())
                            });
                        });
                        Q.confirm('您确认提交保存吗,保存之后就不能再修改', () => {
                            hr.Evaluation.EvaluationResultDetailService.Add({
                                Entities: entities,
                                IsComplete: true
                            }, response => {
                                Q.notifySuccess(`您已完成对${$.cookie('evaluated_user')}的评估！`);
                                radio.attr('disabled', 'disabled');
                                btnSave.addClass('hidden');
                            });
                        })
                    }
                });

                let prt;
                radio.change(e => {
                    prt = $(e.target).parent().parent().parent();
                    if (prt.hasClass('text-notdone')) {
                        console.log("hello");
                        $(e.target).parent().parent().parent().removeClass("text-notdone").addClass("text-done");
                    }
                });

                preva.click((e) => {
                    e.preventDefault();
                    let disabledRadio = $("input[type='radio']:disabled");
                    if ($("input[type='radio']:checked").length > 0 && disabledRadio.length === 0) {
                        Q.confirm('数据未保存，您确认离开此页面吗？', () => {
                            //window.location.href = preva.attr('href');

                            //进入上一页之前判断领导关系
                            this.CheckCurrentUserIsParent(userId, examId, preva);
                        });
                    } else {
                        //window.location.href = preva.attr('href');
                        this.CheckCurrentUserIsParent(userId, examId, preva);
                    }
                });

            });
        }

        private CheckCurrentUserIsParent(userId: number, examId: number, preva: JQuery): void {
            //进入下一页之前判断领导关系
            LeaderShipService.CheckCurrentUserIsParent({
                UserId: userId
            }, response => {
                if (response) {
                    window.location.href = preva.attr('href');
                }
                else {
                    window.location.href = `SelfEvaluation1?i=${examId}&p=${userId}`;
                }
            });
        }
    }
}
