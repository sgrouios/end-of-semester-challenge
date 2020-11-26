using System;
using System.Collections.Generic;

#nullable disable

namespace BasketballTeamAPI.Models
{
    public partial class Fixture
    {
        public Fixture()
        {
            CourtFees = new HashSet<CourtFee>();
        }

        public int FixtureId { get; set; }
        public DateTime FixtureDate { get; set; }
        public string Venue { get; set; }

        public virtual ICollection<CourtFee> CourtFees { get; set; }
    }
}
