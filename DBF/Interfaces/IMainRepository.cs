using DBF.DAL;

namespace DBF.Interfaces
{
    public interface IMainRepository
    {
        Task<List<Customer>> GetCustomersListAsync();

        Task<Customer> NewCustomerAsync(string fullname);

        int GetMaxOrder();
        int GetMinOrder();

        Task<Customer> GetInServiceAsync();
        Task<Customer> GetCustomerByOrderInQueueAsync(int orderInQueue);
        Task<bool> SaveAllChangesAsync();
    }
}
