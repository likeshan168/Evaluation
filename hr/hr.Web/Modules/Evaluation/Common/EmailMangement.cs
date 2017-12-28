using hr.Common;
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
        public static void Send2(string title, string userName, string url, string evaluationUserEmail, string evaluationUserName)
        {
            //var emailBody = TemplateHelper.RenderTemplate(
            //        "~/Modules/Evaluation/UserEvaluationRelation/EvaluationRemind.cshtml", todo);

            StringBuilder sb = new StringBuilder();
            sb.Append($"<html><head><title>{title}</title></head>");
            sb.Append($"<body><p>Dear {evaluationUserName},</p>");
            sb.Append($"<p>{userName}已经完成自我评价，请点击以下链接对他进行评估测试:</p>");
            sb.Append($"<p><a href='{url}'>{url}</a></p>");
            sb.Append($"<p>If you have any questions,please contact to us.</p>");
            sb.Append("Thanks,<br/>");
            sb.Append(" The \"hr\" Team");
            sb.Append("</body>");
            sb.Append("</html>");
            EmailHelper.Send(title, sb.ToString(), evaluationUserEmail);
        }
        [DisplayName("自我评价邮件")]
        public static void Send(string title, string userName, string email, string url)
        {
            //var emailBody = TemplateHelper.RenderTemplate(
            //        "~/Modules/Evaluation/UserEvaluationRelation/EvaluationRemind.cshtml", todo);

            StringBuilder sb = new StringBuilder();
            sb.Append($"<html><head><title>{title}</title></head>");
            sb.Append($"<body><p>Dear {userName},</p>");
            sb.Append($"<p>请点击以下链接去进行评估考核:</p>");
            sb.Append($"<p><a href='{url}'>{url}</a></p>");
            sb.Append($"<p>用户名：{userName}，初始密码：64586103</p>");
            sb.Append($"<p>If you have any questions, please contact to us</p>");
            sb.Append("Thanks,<br/>");
            sb.Append(" The \"hr\" Team");
            sb.Append("</body>");
            sb.Append("</html>");
            EmailHelper.Send(title, sb.ToString(), email);
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

        [DisplayName("密码重置")]
        public static void PasswordReset(string userName, string url, string email)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append($"<html><head><title>密码重置</title></head>");
            sb.Append($"<body><p>Dear {userName},</p>");
            sb.Append($"<p>您的密码已经重置为:64586103 请及时登录 <a href='{url}'>{url}</a> 进行修改</p>");
            sb.Append("Thanks,<br/>");
            sb.Append(" The \"hr\" Team");
            sb.Append("</body>");
            sb.Append("</html>");
            EmailHelper.Send("密码重置", sb.ToString(), email);
        }
    }
}