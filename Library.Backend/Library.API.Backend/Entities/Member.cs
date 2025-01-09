using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Library.API.Backend.Entities.Base;

namespace Library.API.Backend.Entities
{
    public class Member :Thing
    {
        public int Age { get; set; }
        public string? Name { get; set; }
        public string? Phone { get; set; }
    }
}