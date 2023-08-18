using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

namespace Dbf_4_8.Controllers
{
    public class HomeController : ApiController
    {
        [HttpGet]
        [Route("api/home/result")]
        public JsonResult<Result> GetResult()
        {
            Result model = new Result() { Id = 1, Title = "Lalalala" };
            return Json(model);
        }

        [HttpGet]
        [Route("api/home/get_result")]
        public JsonResult<Result> Get_Result()
        {
            Result model = new Result() { Id = 1, Title = "Lalalala" };
            return Json(model);
        }
    }

    public class Result
    {
        public int Id { get; set; }
        public string Title { get; set; }
    }
}
