
namespace hr.Administration
{
    using Serenity.Services;
    using System;
    using System.Collections.Generic;

    public class UserRoleBatchUpdateRequest : ServiceRequest
    {
        public List<Int32> UserIds { get; set; }
        public List<Int32> Roles { get; set; }
    }
}