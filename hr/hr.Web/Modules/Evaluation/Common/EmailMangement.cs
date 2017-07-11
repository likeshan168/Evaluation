using hr.Common;
using hr.Evaluation.Entities;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;

namespace hr.Evaluation
{
    public class EmailMangement
    {
        public static void Send(TodoListViewRow todo)
        {
            //var emailBody = TemplateHelper.RenderTemplate(
            //        "~/Modules/Evaluation/UserEvaluationRelation/EvaluationRemind.cshtml", todo);

            StringBuilder sb = new StringBuilder();
            sb.Append($"<html><head><title>{todo.Title}</title></head>");
            sb.Append($"<body><p>Dear {todo.Username},</p>");
            sb.Append($"<p>请点击一下链接去进行评估测试:</p>");
            sb.Append($"<p><a href='{todo.Url}'>{todo.Url}</a></p>");
            sb.Append($"<p>If you have any questions,please contact to us.</p>");
            sb.Append("Thanks,<br/>");
            sb.Append(" The \"hr\" Team");
            sb.Append("</body>");
            sb.Append("</html>");
            EmailHelper.Send(todo.Title, sb.ToString(), todo.Email);
        }
    }
}