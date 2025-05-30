using Api.Models;
using Api.Queries;
using Api.Repository;
using MediatR;

namespace Api.Handlers
{
    public class GetJobApplicationByIdHandlers : IRequestHandler<GetJobApplyByIdQuery, JobApplication>
    {
        private readonly IGenericRepository<JobApplication> _jobRepository;

        public GetJobApplicationByIdHandlers(IGenericRepository<JobApplication> jobRepository)
        {
            _jobRepository = jobRepository;
        }

        public async Task<JobApplication> Handle(GetJobApplyByIdQuery request, CancellationToken cancellationToken)
        {
            return await _jobRepository.GetByIdAsync(request.Id);
         }
    }
}
