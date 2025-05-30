using Api.Commands;
using Api.Models;
using Api.Repository;
using MediatR;
using Microsoft.AspNetCore.Http.HttpResults;
using System.Drawing.Text;

namespace Api.Handlers
{
    public class UpdateJobapplyHandler : IRequestHandler<UpdateJobapplyCommand, JobApplication>
    {
         private readonly IGenericRepository<JobApplication> _jobRepository;

        public UpdateJobapplyHandler(IGenericRepository<JobApplication> jobRepository)
        {
            _jobRepository = jobRepository;
        }

        public async Task<JobApplication> Handle(UpdateJobapplyCommand request, CancellationToken cancellationToken)
        {
            //var japply = await _jobRepository.GetJobApplicationByIdAsync(request.Id);

            var updatedJob = new JobApplication
            {
                Id = request.Id,
                ApplyDate = request.ApplyDate,
                Company = request.Company,
                Position = request.Position,
                SearcWebsite = request.SearcWebsite,
                City = request.City,
                State = request.State,
                ZipCode = request.ZipCode,
                ApplyingLink = request.ApplyingLink
            };

            await _jobRepository.UpdateAsync(updatedJob);

            return updatedJob;

            
        }

    }
}
