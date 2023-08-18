using AutoMapper;
using DBF.DAL;
using DBF.Dtos;

namespace DBF.Core
{
    public class AutomapperProfile : Profile
    {
        public AutomapperProfile()
        {
            CreateMap<Customer, CustomerToReturnDto>();
            CreateMap<Queue, QueueToReturnDto>();
        }
    }
}
