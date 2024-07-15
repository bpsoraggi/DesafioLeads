using LeadsFullStack.Models;
using LeadsFullStack.Repositories;
using LeadsFullStack.Requests;
using MediatR;

namespace LeadsFullStack.API.Handlers
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
            return await _leadRepository.GetLeadsAsync();
        }
    }
}
