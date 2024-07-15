using MediatR;

namespace LeadsFullStack.Commands
{
    public class AcceptLeadCommand : IRequest<int>
    {
        public int Id { get; set; }

        public AcceptLeadCommand(int id)
        {
            Id = id;
        }
    }
}
