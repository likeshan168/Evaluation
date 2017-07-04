using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace hr.Evaluation
{
    public class TransferEmployeeRequest: ServiceRequest
    {
        public IEnumerable<int> Ids { get; set; }
    }
}