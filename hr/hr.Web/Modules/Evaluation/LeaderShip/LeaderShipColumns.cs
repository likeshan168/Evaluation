
namespace hr.Evaluation.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Evaluation.LeaderShip")]
    [BasedOnRow(typeof(Entities.LeaderShipRow))]
    public class LeaderShipColumns
    {
        [EditLink]
        public String UserUsername { get; set; }

        //public String ParentUsername { get; set; }

    }
}