using Dbf_4_8.Models.DB;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Dbf_4_8.Models
{
    public class DataManager
    {
        public async Task<Customers> GetCustomerByOrderInQueueAsync(int orderInQueue)
        {
            using (var context = new DBFEntities())
            {
                return null;// await context.Customers.Join(context.Queues, p => p.QueueId, c => c.Id, (p,c) => new { Id = p.Id, Fullname = p.Fullname, QueueId = p.QueueId}).FirstOrDefaultAsync();
            }
                
        }

        //public async Task<List<Customer>> GetCustomersListAsync()
        //{
        //    return await _db.Customers.Include(c => c.Queue).ToListAsync();
        //}

        //public async Task<Customer> GetInServiceAsync()
        //{
        //    return await _db.Customers.Include(_ => _.Queue).FirstOrDefaultAsync(c => c.Queue.InService);
        //}

        //public int GetMaxOrder()
        //{
        //    if (_db.Queues.Any())
        //        return _db.Queues.Max(q => q.OrderInQueue);

        //    return 0;
        //}

        //public int GetMinOrder()
        //{
        //    if (_db.Queues.Any())
        //        return _db.Queues.Min(q => q.OrderInQueue);

        //    return 1;
        //}

        //public async Task<Customer> NewCustomerAsync(string fullname)
        //{
        //    int nextOrder = this.GetMaxOrder() + 1;
        //    Customer newCustomer = new()
        //    {
        //        Fullname = fullname,
        //        Queue = new Queue()
        //        {
        //            OrderInQueue = nextOrder
        //        }
        //    };

        //    await _db.Customers.AddAsync(newCustomer);
        //    if (await _db.SaveChangesAsync() > 0) return newCustomer;

        //    throw new Exception("Unable to save new customer in to database");
        //}

        //public async Task<bool> SaveAllChangesAsync()
        //{
        //    return (await _db.SaveChangesAsync() > 0);
        //}
    }
}