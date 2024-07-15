using LeadsFullStack.Commands;
using LeadsFullStack.Models;
using LeadsFullStack.Requests;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace LeadsFullStack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LeadsController : ControllerBase
    {
        private readonly IMediator _mediator;
        public LeadsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<List<LeadModel>> GetLeadsAsync()
        {
            return await _mediator.Send(new GetLeadsQuery());
        }

        [HttpPut]
        public async Task<int> UpdateLeadAsync(UpdateLeadCommand request)
        {
            return await _mediator.Send(request);
        }
    }
}
