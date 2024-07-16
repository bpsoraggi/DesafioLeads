using LeadsFullStack.Application.Queries;
using LeadsFullStack.Domain.Models;
using LeadsFullStack.Domain.Repositories;
using MediatR;

namespace LeadsFullStack.Application.Handlers
{
    public class GetLeadsHandler : IRequestHandler<GetLeadsQuery, List<LeadModel>>
    {
        private readonly ILeadRepository _leadRepository;

        public GetLeadsHandler(ILeadRepository leadRepository)
        {
            _leadRepository = leadRepository;
        }

        public async Task<List<LeadModel>> Handle(GetLeadsQuery request, CancellationToken cancellationToken)
        {
            try
            {
                return await _leadRepository.GetLeadsAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while fetching leads", ex);
            }
        }
    }
}
