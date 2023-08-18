namespace DBF.Dtos
{
    public class QueueToReturnDto
    {
        public int OrderInQueue { get; set; }
        public bool InService { get; set; }
        public DateTime CheckIn { get; set; }
    }
}
