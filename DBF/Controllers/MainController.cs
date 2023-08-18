using AutoMapper;
using DBF.Core;
using DBF.DAL;
using DBF.Dtos;
using DBF.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DBF.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MainController : ControllerBase
    {
        private readonly IMainRepository _repo;
        private readonly IMapper _mapper;

        public MainController(IMainRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("customers-list")]
        public async Task<ApiResponse<List<CustomerToReturnDto>>> GetList()
        {
            var result = await _repo.GetCustomersListAsync();
            return new ApiResponse<List<CustomerToReturnDto>>(_mapper.Map<List<CustomerToReturnDto>>(result));
        }

        [HttpPost]
        [Route("new-customer")]
        public async Task<ApiResponse<CustomerToReturnDto>> NewCustomer(string fullname)
        {
            var result = await _repo.NewCustomerAsync(fullname);
            return new ApiResponse<CustomerToReturnDto>(_mapper.Map<CustomerToReturnDto>(result));
        }

        [HttpPatch]
        [Route("next-in-queue")]
        public async Task<ActionResult<ApiResponse<CustomerToReturnDto>>> NextInQueue()
        {

            Customer current = await _repo.GetInServiceAsync();

            if(current == null)
            {
                int minOrder = _repo.GetMinOrder();
                current = await _repo.GetCustomerByOrderInQueueAsync(minOrder);

                if (current == null) return NotFound("No customers were found");

                current.Queue.InService = true;
                if (await _repo.SaveAllChangesAsync()) 
                    return new ApiResponse<CustomerToReturnDto>(_mapper.Map<CustomerToReturnDto>(current));

                throw new Exception("Unable to save changes in to database");
            }

            Customer result;

            current.Queue.InService = false;
            result = current;

            Customer next = await _repo.GetCustomerByOrderInQueueAsync(current.Queue.OrderInQueue + 1);
            if(next != null)
            {
                next.Queue.InService = true;
                result = next;
            }
            if(await _repo.SaveAllChangesAsync())
                return new ApiResponse<CustomerToReturnDto>(_mapper.Map<CustomerToReturnDto>(result));
            

            throw new Exception("Unknown Error");
        }
    }
}
