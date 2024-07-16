using LeadsFullStack.API.Events;
using LeadsFullStack.API.Services;
using MediatR;

namespace LeadsFullStack.API.Handlers
{
    public class SendEmailHandler : INotificationHandler<LeadUpdatedEvent>
    {
        private readonly IFakeEmailService _emailService;

        public SendEmailHandler(IFakeEmailService emailService)
        {
            _emailService = emailService;
        }

        public async Task Handle(LeadUpdatedEvent notification, CancellationToken cancellationToken)
        {
            try
            {
                await _emailService.SendEmailAsync(notification.Id, notification.FullName);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error sending email: {ex.Message}");
            }
        }
    }
}
