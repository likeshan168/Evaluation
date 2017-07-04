namespace hr.Evaluation {
    export class EvaluationItemPreviewEvaluation2 {
        private container: JQuery;
        constructor(container: JQuery) {
            //this.InitView(container);
            this.container = container;
        }

        public init(): void {
            let res = Evaluation.EvaluationItemService.GetEvaluation2(null, (response) => {
                console.log(response);
                let grps = response.reduce(function (result, current) {
                    result[current.FirstKpiName] = result[current.FirstKpiName] || [];
                    result[current.FirstKpiName].push(current);
                    return result;
                }, {});
                let html = `<table>
                                <tr>
                                    <th class='text-center' style='font-size:18px;' colspan='8'>他人评价</th>
                                </tr>
                               
                                    <tr>
                                        <td style='width:80px;'>考核项目</td>
                                        <td style='width:80px;'>评价内容</td>
                                        <td colspan='5' style='min-width:400px;'>评价标准</td>
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
                        html += `<td style='vertical-align:middle;'>${subpro}</td>`
                        $.each(subarr, (index, value) => {
                            html += `<td style='vertical-align:bottom;'><label>${value.Content}(<label style='color: blue;'>${value.Score}分</label>)<br/><input type="radio" name='${value.SecondKpiName}' value='${value.Score}' style='width:100%'/></label> </td>`
                        });

                        html += `<td style='vertical- align:middle;' ><input type="text" style="width:100%"/></td></tr>`;
                    }
                }
                html += "<tr><td colspan='8' class='text-center'><a href='PreviewEvaluation'><i class='fa fa-arrow-left' aria-hidden='true'></i>上一页</a></td><tr></table>";

                this.container.html(html);

            });
        }
    }
}
