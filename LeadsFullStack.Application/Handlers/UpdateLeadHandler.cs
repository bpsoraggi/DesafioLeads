using LeadsFullStack.Application.Commands;
using LeadsFullStack.Domain.Events;
using LeadsFullStack.Domain.Repositories;
using MediatR;

namespace LeadsFullStack.API.Handlers
{
    public class UpdateLeadHandler : IRequestHandler<UpdateLeadCommand, int>
    {
        private readonly ILeadRepository _leadRepository;
        private readonly IMediator _mediator;

        public UpdateLeadHandler(ILeadRepository leadRepository, IMediator mediator)
        {
            _leadRepository = leadRepository;
            _mediator = mediator;
        }

        public async Task<int> Handle(UpdateLeadCommand request, CancellationToken cancellationToken)
        {
            var lead = await _leadRepository.GetLeadAsync(request.Id);
            if (lead == null)
            {
                throw new BadHttpRequestException("Lead not found");
            }

            if (request.DiscountedPrice != -1)
            {
                lead.DiscountedPrice = request.DiscountedPrice;
            }

            if (request.Status == 1)
            {
                await _mediator.Publish(new LeadUpdatedEvent(lead.Id, lead.FullName), cancellationToken);
            }

            lead.Status = request.Status;
            return await _leadRepository.UpdateLeadAsync(lead);
        }
    }
}
