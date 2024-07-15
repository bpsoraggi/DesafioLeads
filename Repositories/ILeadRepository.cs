using LeadsFullStack.Models;

namespace LeadsFullStack.Repositories
{
    public interface ILeadRepository
    {
        public Task<LeadModel> GetLeadAsync(int id);
        public Task<List<LeadModel>> GetLeadsAsync();
        public Task<int> UpdateLeadAsync(LeadModel leadModel);
    }
}
