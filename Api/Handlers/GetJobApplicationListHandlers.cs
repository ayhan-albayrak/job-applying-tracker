using Api.Models;
using Api.Queries;
using Api.Repository;
using MediatR;

namespace Api.Handlers
{

    public class GetJobApplicationListHandlers : IRequestHandler<GetJobApplyListQuery, List<JobApplication>>
    {
        private readonly IGenericRepository<JobApplication> _jobRepository;

        public GetJobApplicationListHandlers(IGenericRepository<JobApplication> jobRepository)
        {
            _jobRepository = jobRepository;
        }

        public async Task<List<JobApplication>> Handle(GetJobApplyListQuery request, CancellationToken cancellationToken)
        {
            return await _jobRepository.GetListAsync();
        }
    }
}
