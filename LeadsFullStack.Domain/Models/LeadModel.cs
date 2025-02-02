﻿namespace LeadsFullStack.Domain.Models
{
    public class LeadModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public DateTime DateCreated { get; set; }
        public string Suburb { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public int Status { get; set; }
        public double? DiscountedPrice { get; set; }
    }
}
