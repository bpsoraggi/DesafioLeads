﻿using LeadsFullStack.Domain.Models;
using LeadsFullStack.Domain.Repositories;
using LeadsFullStack.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace LeadsFullStack.Infrastructure.Repositories
{
    public class LeadRepository : ILeadRepository
    {
        private readonly LeadsContext _context;
        public LeadRepository(LeadsContext context)
        {
            _context = context;
        }

        public async Task<LeadModel> GetLeadAsync(int id)
        {
            return await _context.Leads.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<LeadModel>> GetLeadsAsync()
        {
            return await _context.Leads.ToListAsync();
        }

        public async Task<int> UpdateLeadAsync(LeadModel leadModel)
        {
            _context.Leads.Update(leadModel);
            return await _context.SaveChangesAsync();
        }
    }
}
