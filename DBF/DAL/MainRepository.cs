using DBF.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DBF.DAL
{
    public class MainRepository : IMainRepository
    {
        private readonly DataContext _db;

        public MainRepository(DataContext db)
        {
            _db = db;
        }

        public async Task<Customer> GetCustomerByOrderInQueueAsync(int orderInQueue)
        {
            return await _db.Customers.Include(c => c.Queue).FirstOrDefaultAsync(c => c.Queue.OrderInQueue == orderInQueue);
        }

        public async Task<List<Customer>> GetCustomersListAsync()
        {
            return await _db.Customers.Include(c => c.Queue).ToListAsync();
        }

        public async Task<Customer> GetInServiceAsync()
        {
            return await _db.Customers.Include(_ => _.Queue).FirstOrDefaultAsync(c => c.Queue.InService);
        }

        public int GetMaxOrder()
        {
            if(_db.Queues.Any())
                return _db.Queues.Max(q => q.OrderInQueue);

            return 0;
        }

        public int GetMinOrder()
        {
            if (_db.Queues.Any())
                return _db.Queues.Min(q => q.OrderInQueue);

            return 1;
        }

        public async Task<Customer> NewCustomerAsync(string fullname)
        {
            int nextOrder = this.GetMaxOrder() + 1;
            Customer newCustomer = new()
            {
                Fullname = fullname,
                Queue = new Queue()
                {
                    OrderInQueue = nextOrder
                }
            };

            await _db.Customers.AddAsync(newCustomer);
            if(await _db.SaveChangesAsync()>0) return newCustomer;

            throw new Exception("Unable to save new customer in to database");
        }

        public async Task<bool> SaveAllChangesAsync()
        {
            return (await _db.SaveChangesAsync() > 0);
        }
    }
}
