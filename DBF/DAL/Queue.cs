using System;
using System.Collections.Generic;

namespace DBF.DAL
{
    public partial class Queue
    {
        public Queue()
        {
            Customers = new HashSet<Customer>();
        }

        public int Id { get; set; }
        public int OrderInQueue { get; set; }
        public bool InService { get; set; }
        public DateTime CheckIn { get; set; }

        public virtual ICollection<Customer> Customers { get; set; }
    }
}
