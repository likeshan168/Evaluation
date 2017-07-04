using Serenity.ComponentModel;
using System.ComponentModel;

namespace hr.Evaluation
{
    [EnumKey("Evaluation.ContentType")]
    public enum ContentType
    {
        [Description("输入框")]
        Input = 1,
        [Description("单选框")]
        Radio = 2,
        [Description("多选框")]
        Multi = 3,
        [Description("填写框")]
        Fill = 4
    }

}