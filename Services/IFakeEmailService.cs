namespace LeadsFullStack.API.Services
{
    public interface IFakeEmailService
    {
        public Task SendEmailAsync(int id, string fullName);
    }
}
