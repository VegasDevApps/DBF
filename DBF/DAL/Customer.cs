using System;
using System.Collections.Generic;

namespace DBF.DAL
{
    public partial class Customer
    {
        public int Id { get; set; }
        public string Fullname { get; set; }
        public int QueueId { get; set; }

        public virtual Queue Queue { get; set; }
    }
}
