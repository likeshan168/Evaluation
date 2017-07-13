namespace hr.Evaluation {
    export class Evaluation1 {
        private container: JQuery;
        constructor(container: JQuery) {
            //this.InitView(container);
            this.container = container;
        }

        public init(): void {
            let examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
            let userId = parseInt(hr.Utils.getQueryString("p", window.location.href));
            console.log($.cookie('evaluated_user'));
            let res = Evaluation.EvaluationItemService.GetEvaluation1ByExam({
                ExamId: examId,
                UserId: userId
            }, (response) => {
                console.log(response);
                let grps = response.reduce(function (result, current) {
                    result[current.FirstKpiName] = result[current.FirstKpiName] || [];
                    result[current.FirstKpiName].push(current);
                    return result;
                }, {});
                let html = `<table>
                                <tr>
                                    <th class='text-center' style='font-size:18px;' colspan='4'>对<u>${$.cookie('evaluated_user')}</u>进行评价</th>
                                </tr>
                                    <tr>
                                        <td style='width:80px;'>考核项目</td>
                                        <td style='width:80px;'>评价内容</td>
                                        <td style='min-width:400px;'>评价标准</td>
                                        <td style='width:80px;'>得分</td>
                                    </tr>
                                `;
                for (let pro in grps) {
                    //console.log(pro);
                    let subGrps = grps[pro].reduce((result, current) => {
                        result[current.SecondKpiName] = result[current.SecondKpiName] || [];
                        result[current.SecondKpiName].push(current);
                        return result;
                    }, {});
                    console.log(subGrps);
                    let subKeys = [];
                    for (let subpro in subGrps) {
                        subKeys.push(subpro);
                    }
                    let toprowpan = subKeys.length;
                    let colspan = 5;
                    let i = 0;

                    for (let subpro in subGrps) {
                        let subarr = subGrps[subpro];
                        html += '<tr>'
                        if (i === 0) {
                            html += `<td rowspan='${toprowpan}' style='vertical-align: middle;width:80px'>${pro}</td>`;
                        }
                        i++;
                        html += `<td>${subpro}</td>`
                        $.each(subarr, (index, value) => {
                            html += `<td><textarea class='form-control' style='width:100%;min-height:100px;' type='text'>${value.InputContent !== undefined?value.InputContent:value.Content}</textarea></td>`;

                            if (value.FScore) {
                                html += `<td><input disabled='disabled' data-itemid='${value.Id}' data-maxscore='${value.Score}' class='form-control success' type="number" max="${value.Score}" min="0" value='${value.FScore}' /></td></tr>`;
                            }
                            else {
                                html += `<td><input  data-itemid='${value.Id}' data-maxscore='${value.Score}' class='form-control' type="number" max="${value.Score}" min="0" /></td></tr>`;
                            }
                        });

                        

                        //html += '<td><input type="text" /></td></tr>';
                    }
                }
                html += `<tr><td colspan='4' class='text-center'><a id='preva' href='SelfEvaluation1?i=${examId}&p=${userId}'><i class='fa fa-arrow-left' aria-hidden='true'></i>上一页</a>&nbsp;&nbsp;&nbsp;<button id='btnSave' type="button" class="btn btn-primary hidden" id='btnSave'>保存</button>&nbsp;&nbsp;&nbsp;<a id='nexta' href='Evaluation2?i=${examId}&p=${userId}'><i class='fa fa-arrow-right' aria-hidden='true'></i>下一页</a></td><tr></table>`;

                this.container.html(html);

                let nexta = $('#nexta');
                let preva = $('#preva');
                let btn = $('#btnSave');
                let area = $("textarea.form-control");
                nexta.attr('href', `Evaluation2?i=${examId}&p=${userId}`);
                let inputScore = $('input[type="number"].form-control');

                inputScore.change((e) => {
                    let obj = $(e.target);
                    let maxscore = obj.data('maxscore');
                    console.log(maxscore);
                    if (obj.val() > maxscore) {
                        Q.notifyError(`打分不能超过最大的分值：${maxscore}`);
                        obj.val(maxscore);
                        obj.focus();
                        return;
                    }
                });
                let arr = [];
                inputScore.each((index, ele) => {
                    arr.push(ele);
                });
                if (Q.any(arr, p => !$(p).hasClass('success'))) {
                    btn.removeClass('hidden');
                }
                preva.click((e) => {
                    e.preventDefault();

                    if (Q.any(arr, p => !Q.isEmptyOrNull($(p).val())) && Q.any(arr, p => !$(p).hasClass('success'))) {
                        Q.confirm('数据未保存，您确认离开此页面吗？', () => {
                            window.location.href = preva.attr('href');
                        });
                    } else {
                        window.location.href = preva.attr('href');
                    }
                });
                nexta.click((e) => {
                    e.preventDefault();

                    if (Q.any(arr, p => !Q.isEmptyOrNull($(p).val())) && Q.any(arr, p => !$(p).hasClass('success'))) {
                        Q.confirm('数据未保存，您确认离开此页面吗？', () => {
                            window.location.href = nexta.attr('href');
                        });
                    } else {
                        window.location.href = nexta.attr('href');
                    }
                });

                btn.click(e => {
                    console.log(arr);
                    if (Q.any(arr, p => Q.isEmptyOrNull($(p).val()))) {
                        Q.notifyError('还有未评分的项目');
                        return;
                    } else {
                        let entities = [];
                        arr.forEach((ele, index) => {
                            console.log(area.eq(index).val());
                            entities.push({
                                EvaluationItemId: $(ele).data('itemid'),
                                ExamId: examId,
                                UserId: userId,
                                Score: parseInt($(ele).val()),
                                InputContent: (area.eq(index)).val()
                            });
                        })
                        console.log(entities);
                        hr.Evaluation.EvaluationResultDetailService.Add({
                            Entities: entities,
                            IsComplete: false
                        }, response => {
                            Q.notifySuccess('保存成功！');
                            //inputScore.attr('disabled', 'disabled');
                            inputScore.addClass('success');
                            btn.addClass('hidden');
                        });
                    }
                });

            });
        }
    }
}
