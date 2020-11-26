using System;
using System.Collections.Generic;

#nullable disable

namespace BasketballTeamAPI.Models
{
    public partial class CourtFee
    {
        public int CourtFeeId { get; set; }
        public double AmountPaid { get; set; }
        public int PayeeId { get; set; }
        public int FixtureId { get; set; }

        public virtual Fixture Fixture { get; set; }
        public virtual Member Payee { get; set; }
    }
}
