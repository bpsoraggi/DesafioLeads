using LeadsFullStack.Models;
using Microsoft.EntityFrameworkCore;

namespace LeadsFullStack.Data
{
    public class LeadsContext : DbContext
    {
        protected readonly IConfiguration _config;
        public LeadsContext(IConfiguration config)
        {
            _config = config;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(_config.GetConnectionString("DefaultConnection"));
        }

        public DbSet<LeadModel> Leads { get; set; }
    }
}
