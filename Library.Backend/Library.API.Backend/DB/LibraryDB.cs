using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Library.API.Backend.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Library.API.Backend.DB
{
    public class LibraryDB(DbContextOptions options) : IdentityDbContext<IdentityUser>(options)
    {
        public required DbSet<Member> Members { get; set; }
        public required DbSet<Book> Books { get; set; }
    }
}