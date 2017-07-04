using Serenity.ComponentModel;
using System.ComponentModel;

namespace hr.Evaluation.Entities
{
    [EnumKey("Evaluation.GenderType")]
    public enum GenderType
    {
        [Description("Female")]
        Female = 1,
        [Description("Male")]
        Male = 2
    }

}
