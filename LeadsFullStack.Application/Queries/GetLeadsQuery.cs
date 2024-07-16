using LeadsFullStack.Domain.Models;
using MediatR;

namespace LeadsFullStack.Application.Queries
{
    public class GetLeadsQuery : IRequest<List<LeadModel>>
    {
    }
}
