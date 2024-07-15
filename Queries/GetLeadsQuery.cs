using LeadsFullStack.Models;
using MediatR;

namespace LeadsFullStack.Requests
{
    public class GetLeadsQuery : IRequest<List<LeadModel>>
    {
    }
}
