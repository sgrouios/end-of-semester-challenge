using System;
using System.Collections.Generic;

#nullable disable

namespace BasketballTeamAPI.Models
{
    public partial class Member
    {
        public Member()
        {
            CourtFees = new HashSet<CourtFee>();
        }

        public int MemberId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string UserType { get; set; }
        public bool Pending { get; set; }

        public virtual ICollection<CourtFee> CourtFees { get; set; }
    }
}
