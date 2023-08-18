namespace DBF.Core
{
    public class ApiError
    {
        public ApiError(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefualtMessageByStatusCode(statusCode);
        }


        public bool Error { get; set; } = true;
        public string Message { get; set; }
        public int StatusCode { get; set; }

        private string GetDefualtMessageByStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "Bad Request",
                404 => "Required data of information is missing",
                500 => "Internal Server Error",
                _ => null
            };
        }
    }
}
