using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BasketballTeamAPI.Models;

namespace BasketballTeamAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasketballController : ControllerBase
    {
        private readonly BasketballTeamContext _context;

        public BasketballController(BasketballTeamContext context)
        {
            _context = context;
        }

        // GET: api/Basketball
        [HttpGet("getMembers")]
        public async Task<ActionResult<IEnumerable<Member>>> GetMembers()
        {
            return await _context.Members.ToListAsync();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(Login details)
        {
            try
            {
                var member = await _context.Members.Where(m => m.Email == details.Email && m.Password == details.Password)
                    .Select(m => new Member { MemberId = m.MemberId, Name = m.Name, Email = m.Email, UserType = m.UserType, Pending = m.Pending })
                    .FirstOrDefaultAsync();

                if (member != null)
                {
                    if (member.Pending == true)
                    {
                        return Unauthorized("Membership pending");
                    }
                    else
                    {
                        return Ok(member);
                    }
                }
                else
                {
                    return BadRequest("No member found");
                }
            }
            catch (Exception ex)
            {
                return BadRequest("Something went wrong");
            }

        }

        [HttpPost("registerMember")]
        public async Task<IActionResult> RegisterMember(Member member)
        {
            try
            {
                _context.Members.Add(member);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception)
            {
                return BadRequest("Something went wrong");
            }

        }

        [HttpPost("addFixture")]
        public async Task<IActionResult> AddFixture(Fixture fixture)
        {
            try
            {
                _context.Fixtures.Add(fixture);
                await _context.SaveChangesAsync();

                return Ok();

            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // GET: api/CoffeeBookings
        [HttpGet("playedFixtures")]
        public async Task<ActionResult<IEnumerable<Fixture>>> GetPlayedFixtures()
        {
            return await _context.Fixtures.Where(fix => fix.FixtureDate < DateTime.Now).ToListAsync();
        }

        [HttpGet("futureFixtures")]
        public async Task<ActionResult<IEnumerable<Fixture>>> GetFutureFixtures()
        {
            return await _context.Fixtures.Where(fix => fix.FixtureDate > DateTime.Now).ToListAsync();
        }

        [HttpPost("enterCourtFee")]
        public async Task<IActionResult> EnterFixtureFee(CourtFee fee)
        {
            try
            {
                _context.CourtFees.Add(fee);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest("Something went wrong");
            }
        }

        [HttpDelete("deleteFixture/{id}")]
        public async Task<IActionResult> DeleteFixture(int id)
        {
            //Get fixture
            var fixture = await _context.Fixtures.FindAsync(id);

            //Get courtFees
            var courtFees = await _context.CourtFees.Where(cf => cf.FixtureId == id).ToListAsync();

            if (fixture == null)
            {
                return NotFound("Fixture not found");
            }
            else if (courtFees.Count() == 0)
            {
                //Fixture exists but no courtFees
                try
                {
                    _context.Fixtures.Remove(fixture);
                    await _context.SaveChangesAsync();

                    return Ok();
                }
                catch (Exception ex)
                {
                    return BadRequest("Something went wrong");
                }
            }
            else
            {
                return BadRequest("Fixture cannot be cancelled");

            }
        }
    }
}
