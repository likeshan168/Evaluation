
namespace hr.Evaluation.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Evaluation.LeaderShip")]
    [BasedOnRow(typeof(Entities.LeaderShipRow))]
    public class LeaderShipForm
    {
        public int UserId { get; set; }
        //public String UserUsername { get; set; }

        public int ParentUserId { get; set; }
    }
}