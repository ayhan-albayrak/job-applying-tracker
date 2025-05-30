using MediatR;

namespace Api.Commands
{
    public class DeleteJobapplyCommand :IRequest<int>
    {
        public int Id { get; set; }
    }
}
