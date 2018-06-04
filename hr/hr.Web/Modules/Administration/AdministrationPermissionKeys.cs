
using Serenity.Extensibility;
using System.ComponentModel;

namespace hr.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";

        [DisplayName("Users")]
        public class Users
        {
            public const string LookupScript = "Evaluation:Users:LookupScript";
        }
    }
}
