using LeadsFullStack.Commands;
using LeadsFullStack.Repositories;
using MediatR;

namespace LeadsFullStack.API.Handlers
{
    public class UpdateLeadHandler : IRequestHandler<UpdateLeadCommand, int>
    {
        private readonly ILeadRepository _leadRepository;

        public UpdateLeadHandler(ILeadRepository leadRepository)
        {
            _leadRepository = leadRepository;
        }

        public async Task<int> Handle(UpdateLeadCommand request, CancellationToken cancellationToken)
        {
            var lead = await _leadRepository.GetLeadAsync(request.Id);
            if (lead == null)
            {
                return default;
            }

            if (request.DiscountedPrice != -1)
            {
                lead.DiscountedPrice = request.DiscountedPrice;
            }

            lead.Status = request.Status;
            return await _leadRepository.UpdateLeadAsync(lead);
        }
    }
}
