namespace hr.Archive {
    export class Evaluation1 {
        private container: JQuery;
        constructor(container: JQuery) {
            //this.InitView(container);
            this.container = container;
        }

        public init(): void {
            let examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
            let res = ExamArchiveService.GetEvaluation1({ ExamId: examId }, (response) => {
                console.log(response);
                let grps = response.reduce(function (result, current) {
                    result[current.FirstKpiName] = result[current.FirstKpiName] || [];
                    result[current.FirstKpiName].push(current);
                    return result;
                }, {});
                let html = `<div class='row'> <table>
                                <tr>
                                    <th class='text-center' style='font-size:18px;' colspan='4'>他人评价</th>
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
                            html += `<td><textarea style='width:100%;min-height:100px;' type='text'>${value.Content}</textarea></td>`
                        });

                        html += '<td><input type="text" /></td></tr>';
                    }
                }
                html += `<tr><td colspan='4' class='text-center'><a href='SelfEvaluation?i=${examId}'><i class='fa fa-arrow-left' aria-hidden='true'></i>上一页</a>&nbsp;&nbsp;&nbsp;<a href='Evaluation2?i=${examId}'><i class='fa fa-arrow-right' aria-hidden='true'></i>下一页</a></td><tr></table></div>`;

                this.container.html(html);

            });
        }
    }
}
