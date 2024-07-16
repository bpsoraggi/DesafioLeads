namespace LeadsFullStack.API.Services
{
    public class FakeEmailService : IFakeEmailService
    {
        private string _emailAddress = "vendas@test.com";
        private readonly string path = System.IO.Directory.GetCurrentDirectory() + "\\email.txt";

        public async Task SendEmailAsync(int id, string fullName)
        {
            var content = $"Destinatário: {_emailAddress}\nNotificação de que o lead com JobID {id} de nome {fullName} foi aprovado.\n";

            Console.Write("Sending email...");
            await File.AppendAllTextAsync(path, content);
        }
    }
}
