using MediatR;

namespace LeadsFullStack.Commands
{
    public class UpdateLeadCommand : IRequest<int>
    {
        public int Id { get; set; }
        public int Status { get; set; }
        public decimal DiscountedPrice { get; set; }

        public UpdateLeadCommand(int id, int status, decimal discountedPrice)
        {
            Id = id;
            Status = status;
            DiscountedPrice = discountedPrice;
        }
    }
}
