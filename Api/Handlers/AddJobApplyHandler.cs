using Api.Commands;
using Api.Models;
using Api.Repository;
using MediatR;

namespace Api.Handlers
{
    public class AddJobApplicationHandler : IRequestHandler<AddJobapplyCommand, JobApplication>
    {
        private readonly IGenericRepository<JobApplication> _repository;

        public AddJobApplicationHandler(IGenericRepository<JobApplication> repository)
        {
            _repository = repository;
        }

       public async Task<JobApplication> Handle(AddJobapplyCommand request, CancellationToken cancellationToken)
        {
            JobApplication jobApp = new JobApplication
            {
                ApplyDate = request.ApplyDate,
                ApplyingLink = request.ApplyingLink,
                City = request.City,
                Company = request.Company,
                Position = request.Position,
                SearcWebsite = request.SearcWebsite,
                State = request.State,
                ZipCode = request.ZipCode
            };
           return await _repository.AddAsync(jobApp);
        }
    }
}
