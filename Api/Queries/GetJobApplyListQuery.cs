using Api.Models;
using MediatR;

namespace Api.Queries
{
    public class GetJobApplyListQuery : IRequest<List<JobApplication>>
    {
    }
}
