namespace FinanceManager.Api.Entities
{
    public class Transaction
    {
        public Guid Id { get; set; } 
        public Decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string Type {  get; set; }
        public string Description { get; set; }

        public Guid CategoryId { get; set; }
        public Category category { get; set; }

        public Guid UserId { get; set; }
        public User User { get; set; }
    }
}
