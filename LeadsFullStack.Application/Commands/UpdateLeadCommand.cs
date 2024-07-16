using MediatR;

namespace LeadsFullStack.Application.Commands
{
    public class UpdateLeadCommand : IRequest<int>
    {
        public int Id { get; set; }
        public int Status { get; set; }
        public double DiscountedPrice { get; set; }

        public UpdateLeadCommand(int id, int status, double discountedPrice)
        {
            Id = id;
            Status = status;
            DiscountedPrice = discountedPrice;
        }
    }
}
