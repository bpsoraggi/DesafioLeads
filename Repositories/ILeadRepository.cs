using LeadsFullStack.Models;

namespace LeadsFullStack.Repositories
{
    public interface ILeadRepository
    {
        public Task<List<LeadModel>> GetLeadsAsync();
    }
}
