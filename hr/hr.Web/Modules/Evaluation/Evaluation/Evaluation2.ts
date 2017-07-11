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
                                    <th class='text-center' style='font-size:18px;' colspan='7'>对<u>${$.cookie('evaluated_user')}</u>进行评价</th>
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
                    console.log(subGrps);
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
                        html += '<tr class="text-danger">'
                        if (i === 0) {
                            html += `<td rowspan='${toprowpan}' style='vertical-align: middle;width:80px'>${pro}</td>`;
                        }
                        i++;
                        html += `<td style='vertical-align:middle;'>${subpro}</td>`
                        $.each(subarr, (index, value) => {
                            if (value.FScore) {
                                html += `<td style='vertical-align:bottom;'><label>${value.Content}(<label style='color: blue;'>${value.Score}分</label>)<br/><input data-itemid='${value.Id}' type="radio" checked='checked' name='${value.SecondKpiName}' value='${value.Score}' style='width:100%'/></label> </td>`
                            } else {
                                html += `<td style='vertical-align:bottom;'><label>${value.Content}(<label style='color: blue;'>${value.Score}分</label>)<br/><input data-itemid='${value.Id}' type="radio" name='${value.SecondKpiName}' value='${value.Score}' style='width:100%'/></label> </td>`
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
                checkedRd.each((index, ele) => {
                    $(ele).parent().parent().parent().removeClass("text-danger").addClass("text-success");
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
                        //console.log(entities);
                        hr.Evaluation.EvaluationResultDetailService.Add({
                            Entities: entities
                        }, response => {
                            Q.notifySuccess('保存成功！');
                        });
                    }
                });

                let prt;
                radio.change(e => {
                    prt = $(e.target).parent().parent().parent();
                    if (prt.hasClass('text-danger')) {
                        $(e.target).parent().parent().parent().removeClass("text-danger").addClass("text-success");
                    }
                });

                preva.click((e) => {
                    e.preventDefault();

                    if (checkedRd.length > 0 && Q.any(checkedRd, p => $(p).parent().parent().parent().hasClass('text-danger'))) {
                        Q.confirm('数据未保存，您确认离开此页面吗？', () => {
                            window.location.href = preva.attr('href');
                        });
                    } else {
                        window.location.href = preva.attr('href');
                    }
                });

            });
        }
    }
}
