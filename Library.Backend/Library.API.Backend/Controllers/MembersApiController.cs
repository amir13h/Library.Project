using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Library.API.Backend.DB;
using Library.API.Backend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Library.API.Backend.Controllers
{
    [ApiController]
    [Route("api/members")]
    public class MembersApiController : ControllerBase
    {
        private readonly LibraryDB _db;

        public MembersApiController(LibraryDB db)
        {
            _db = db;
        }

        [HttpGet("list")]
        public async Task<ActionResult<List<Member>>> List1()
        {
            Thread.Sleep(1000);
            var members = await _db.Members.ToListAsync();
            return Ok(members);
        }

        [HttpPost("add")]
        public async Task<ActionResult> Add(Member member)
        {
            await _db.Members.AddAsync(member);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(List1), new { id = member.Id }, member);
        }

        [HttpDelete("delete/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var member = await _db.Members.FindAsync(id);
            if (member == null)
            {
                return NotFound();
            }

            _db.Members.Remove(member);
            await _db.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("update")]
        public async Task Update(Member member)
        {
            _db.Members.Update(member);
            await _db.SaveChangesAsync();
        }
    }
}
