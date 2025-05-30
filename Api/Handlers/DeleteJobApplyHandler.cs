using Api.Commands;
using Api.Models;
using Api.Queries;
using Api.Repository;
using MediatR;

namespace Api.Handlers
{
    public class DeleteJobApplyHandler : IRequestHandler<DeleteJobapplyCommand, int>
    {
        private readonly IGenericRepository<JobApplication> _jobApplyRepository;

        public DeleteJobApplyHandler(IGenericRepository<JobApplication> jobApplyRepository)
        {
            _jobApplyRepository = jobApplyRepository;
        }

        public async Task<int> Handle(DeleteJobapplyCommand request, CancellationToken cancellationToken)
        {
            var existing = await _jobApplyRepository.GetByIdAsync(request.Id);
            if (existing == null) return 0;

            return await _jobApplyRepository.DeleteAsync(request.Id);
        }
    }
}
