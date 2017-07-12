﻿using hr.Common;
using hr.Evaluation.Entities;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Web;

namespace hr.Evaluation
{
    public class EmailMangement
    {
        [DisplayName("评估测试邮件")]
        public static void Send2(TodoListViewRow todo, string evaluationUserName)
        {
            //var emailBody = TemplateHelper.RenderTemplate(
            //        "~/Modules/Evaluation/UserEvaluationRelation/EvaluationRemind.cshtml", todo);

            StringBuilder sb = new StringBuilder();
            sb.Append($"<html><head><title>{todo.Title}</title></head>");
            sb.Append($"<body><p>Dear {evaluationUserName},</p>");
            sb.Append($"<p>{todo.Username}已经完成自我评价，请点击以下链接对他进行评估测试:</p>");
            sb.Append($"<p><a href='{todo.Url}'>{todo.Url}</a></p>");
            sb.Append($"<p>If you have any questions,please contact to us.</p>");
            sb.Append("Thanks,<br/>");
            sb.Append(" The \"hr\" Team");
            sb.Append("</body>");
            sb.Append("</html>");
            EmailHelper.Send(todo.Title, sb.ToString(), todo.Email);
        }
        [DisplayName("自我评价邮件")]
        public static void Send(TodoListViewRow todo)
        {
            //var emailBody = TemplateHelper.RenderTemplate(
            //        "~/Modules/Evaluation/UserEvaluationRelation/EvaluationRemind.cshtml", todo);

            StringBuilder sb = new StringBuilder();
            sb.Append($"<html><head><title>{todo.Title}</title></head>");
            sb.Append($"<body><p>Dear {todo.Username},</p>");
            sb.Append($"<p>请点击以下链接去进行评估测试:</p>");
            sb.Append($"<p><a href='{todo.Url}'>{todo.Url}</a></p>");
            sb.Append($"<p>If you have any questions, please contact to us.</p>");
            sb.Append("Thanks,<br/>");
            sb.Append(" The \"hr\" Team");
            sb.Append("</body>");
            sb.Append("</html>");
            EmailHelper.Send(todo.Title, sb.ToString(), todo.Email);
        }
        [DisplayName("考核结果邮件")]
        public static void Send3(EvaluationFinalResultRow todo)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append($"<html><head><title>{todo.Title}考核结果</title></head>");
            sb.Append($"<body><p>Dear {todo.UserName},</p>");
            sb.Append($"<p>您在{todo.Title}中的考核结果如下:</p>");
            sb.Append($"<p>得分：{todo.TotalScore} &nbsp;等级：{todo.Grade}</p>");
            sb.Append($"<p>If you have any questions, please contact to us.</p>");
            sb.Append("Thanks,<br/>");
            sb.Append(" The \"hr\" Team");
            sb.Append("</body>");
            sb.Append("</html>");
            EmailHelper.Send(todo.Title, sb.ToString(), todo.Email);
        }
    }
}