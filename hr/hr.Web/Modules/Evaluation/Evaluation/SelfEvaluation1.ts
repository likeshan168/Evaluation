namespace hr.Evaluation {
    export class SelfEvaluation1 {
        private container: JQuery;

        constructor(container: JQuery) {
            //this.InitView(container);
            this.container = container;
        }

        public init(): void {
            let examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
            let userId = parseInt(hr.Utils.getQueryString("p", window.location.href));

            Evaluation.EvaluationItemService.GetUserToUsers(null, users => {

                //console.log(users);
                let ht = `<select class="form-control" id='sltUsers'><option value='0'>请选择要评价的人</option>`;
                $.each(users, (index, value) => {
                    if(value.HasEvaluated){
                        ht += `<option value='${value.UserId}'>${value.Username}(已评价)</option>`
                    }else{
                        ht += `<option value='${value.UserId}'>${value.Username}</option>`
                    }
                });
                ht += `</select>
                        <div class='row' id='evaluationContent'>
                            <p class='bg-danger text-center'>请选择需要评价的人，否则不能进行下一步的操作</p>
                        </div>
                        <div class="text-center"><a id='preva' href='SelfEvaluation?i=${examId}'><i class='fa fa-arrow-left' aria-hidden='true'></i>上一页</a>&nbsp;&nbsp;<button type="button" class="btn btn-primary hideele" id='btnSave'>保存</button>&nbsp;&nbsp;<a id='nexta' href='Evaluation1?i=${examId}' class='hideele'>下一页<i class="fa fa-arrow-right" aria-hidden="true"></i></a></div> 
                        `;

                this.container.html(ht);

                let sltUsers = $('#sltUsers');

                sltUsers.change(() => {
                    this.onSelectChange(examId, sltUsers);
                });
                console.log(userId);

                if (userId) {
                    sltUsers.val(userId);
                    this.onSelectChange(examId, sltUsers);
                }
            });

        }

        private onSelectChange(examId: number, sltUsers: JQuery): void {

            let nexta = $('#nexta');
            let preva = $('#preva');
            let btn = $('#btnSave');

            let evaluationContent = $('#evaluationContent');
            let html = '';
            if (sltUsers.val() === '0') {
                html += `<p class='bg-danger text-center'>请选择需要评价的人，否则不能进行下一步的操作</p>`;
                evaluationContent.html(html);
                btn.addClass('hideele');
                nexta.addClass('hideele');
                return;
            }

            let res = Evaluation.EvaluationItemService.GetSelfEvaluation1ByExam({
                ExamId: examId,
                UserId: sltUsers.val()
            }, (response) => {

                if (response !== null) {
                    let count = res.responseJSON.length;
                    //console.log(res.responseJSON);
                    if (res.responseJSON.length !== 0) {
                        if (Q.any(res.responseJSON, p => Q.isEmptyOrNull(p['InputContent']))) {
                            html += `<p class='bg-danger text-center'>${sltUsers.children("option:selected").text()}同志还未进行过自我评价，在其进行自我评价之后，才能进行下一步的操作</p>`;
                            evaluationContent.html(html);
                            $('#nexta').removeClass('hideele').removeClass('showele').addClass('hideele');
                            return;
                        }
                        html += `<table>
                                    <tr>
                                        <th class='text-center' style='font-size:18px;' colspan='6'>
                                            对&nbsp;&nbsp;<span style="color:#00a7d0">${sltUsers.children("option:selected").text()}</span>&nbsp;&nbsp;进行评价
                                        </th>
                                     </tr>
                                    <tr>
                                        <td style='width:80px;'><strong>考核项目</strong></td>
                                        <td style='width:80px;'><strong>评价内容</strong></td>
                                        <td colspan='2' style='min-width:400px;'><strong>评价标准(被评人的自我评价)</strong></td>
                                        <td style='width:120px;'><strong>得分(参评人评价)</strong></td>
                                        <td style='width:150px;'><strong>备注</strong></td>
                                    </tr>
                                `;
                        res.responseJSON.forEach((item, index) => {
                            html += `<tr>`;
                            if (index == 0) {
                                html += `<td rowspan='${count}' style='vertical-align: middle;width:80px'><p>${item.FirstKpiName}</p></td>`;
                            }
                            html += `<td width='80px'><p>${item.SecondKpiName}</p></td>
                                    <td width='150px'><p>${item.Content}</p></td>`;
                            if (item.ContentType === 1) {
                                //输入框
                                html += `<td>${item.Mark}<textarea data-itemid='${item.Id}' disabled='disabled' class='form-control' style= 'width:100%;min-height:150px;'>${item.InputContent === undefined ? '' : item.InputContent}</textarea></td>`
                            }
                            if (item.FScore) {
                                html += `<td><input disabled='disabled' data-itemid='${item.Id}' data-maxscore='${item.Score}' class='form-control success' type="number" max="${item.Score}" min="0" value='${item.FScore}' /></td><td><small>${item.Remark}</small></td></tr>`;
                            }
                            else {
                                html += `<td><input  data-itemid='${item.Id}' data-maxscore='${item.Score}' class='form-control' type="number" max="${item.Score}" min="0" /></td><td><small>${item.Remark}</small></td></tr>`;
                            }
                        })
                    }
                }

                evaluationContent.html(html);

                nexta.removeClass('hideele').addClass('showele').attr('href', `Evaluation1?i=${examId}&p=${sltUsers.val()}`);
                let inputScore = $('input[type="number"].form-control');

                inputScore.change((e) => {
                    let obj = $(e.target);
                    console.log(e);
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
                    btn.removeClass('hideele');
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
                            $.cookie('evaluated_user', sltUsers.children("option:selected").text(), {path: '/'});
                            //进入下一页之前判断领导关系
                            LeaderShipService.CheckCurrentUserIsParent({
                                UserId: parseInt(sltUsers.val())
                            }, response => {
                                if (response) {
                                    window.location.href = nexta.attr('href');
                                }
                                else {
                                    window.location.href = `Evaluation2?i=${examId}&p=${sltUsers.val()}`;
                                }
                            });
                        });
                    } else {
                        $.cookie('evaluated_user', sltUsers.children("option:selected").text(), {path: '/'});
                        LeaderShipService.CheckCurrentUserIsParent({
                            UserId: parseInt(sltUsers.val())
                        }, response => {
                            console.log(response);
                            if (response) {
                                window.location.href = nexta.attr('href');
                            }
                            else {
                                window.location.href = `Evaluation2?i=${examId}&p=${sltUsers.val()}`;
                            }
                        });
                    }
                });
                btn.click(e => {
                    //console.log(arr);
                    if (Q.any(arr, p => Q.isEmptyOrNull($(p).val()))) {
                        Q.notifyError('还有未评分的项目');
                        return;
                    } else {
                        let entities = [];
                        arr.forEach((ele, index) => {
                            entities.push({
                                EvaluationItemId: $(ele).data('itemid'),
                                ExamId: examId,
                                UserId: parseInt(sltUsers.val()),
                                Score: parseInt($(ele).val())
                            });
                        })
                        //console.log(entities);
                        hr.Evaluation.EvaluationResultDetailService.Add({
                            Entities: entities,
                            IsComplete: false
                        }, response => {
                            Q.notifySuccess('保存成功！');
                            //inputScore.attr('disabled', 'disabled');
                            inputScore.addClass('success').attr('disabled', 'disabled');
                            btn.addClass('hideele');
                        });
                    }
                });
            });
        }
    }
}
