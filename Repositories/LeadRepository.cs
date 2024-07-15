using LeadsFullStack.Data;
using LeadsFullStack.Models;
using Microsoft.EntityFrameworkCore;

namespace LeadsFullStack.Repositories
{
    public class LeadRepository : ILeadRepository
    {
        private readonly LeadsContext _context;
        public LeadRepository(LeadsContext context)
        {
            _context = context;
        }
        public async Task<List<LeadModel>> GetLeadsAsync()
        {
            return await _context.Leads.ToListAsync();
        }
    }
}
