using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BasketballTeamAPI.Models
{
    public class MemberFee
    {
        public int MemberId { get; set; }
        public string Name { get; set; }
        public double AmountPaid { get; set; }
        public string UserType { get; set; }
    }
}
