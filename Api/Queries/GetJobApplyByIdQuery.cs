using Api.Models;
using MediatR;

namespace Api.Queries
{
    public class GetJobApplyByIdQuery : IRequest<JobApplication>
    {
        public int Id { get; set; }

    }
}
