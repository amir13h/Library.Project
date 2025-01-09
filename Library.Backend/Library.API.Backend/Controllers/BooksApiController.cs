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
    [Route("api/books")]
    public class BooksApiController : ControllerBase
    {
        private readonly LibraryDB _db;

        public BooksApiController(LibraryDB db)
        {
            _db = db;
        }
        [HttpGet("list")]
        public async Task<List<Book>> List1()
        {
            Thread.Sleep(1000);
            return await _db.Books.ToListAsync();
        }
        [HttpPost("add")]
        public async Task Add(Book book)
        {
            await _db.Books.AddAsync(book);
            await _db.SaveChangesAsync();
        }
        [HttpDelete("delete/{id}")]
        public async Task Delete(int id)
        {
            var book = await _db.Books.FindAsync(id);
            if (book != null)
            {
                _db.Books.Remove(book);
                await _db.SaveChangesAsync();
            }
        }
        [HttpPut("update")]
        public async Task Update(Book book)
        {
            _db.Books.Update(book);
            await _db.SaveChangesAsync();
        }

    }
}