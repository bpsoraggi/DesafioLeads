using MediatR;

namespace LeadsFullStack.API.Events
{
    public class LeadUpdatedEvent : INotification
    {
        public int Id { get; }
        public string FullName { get; }

        public LeadUpdatedEvent(int id, string fullName)
        {
            Id = id;
            FullName = fullName;
        }
    }
}
