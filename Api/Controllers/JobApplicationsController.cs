using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Api.Data;
using Api.Models;
using MediatR;
using Api.Queries;
using Api.Commands;
using Microsoft.CodeAnalysis.Elfie.Diagnostics;
using Mono.TextTemplating;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using System.Reflection.Emit;
using NuGet.Protocol.Plugins;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobApplicationsController : ControllerBase
    {
        //private readonly ApplicationContext _context;
        private IMediator _mediator;

        public JobApplicationsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET: api/JobApplications
        [HttpGet]
        public async Task<List<JobApplication>> GetJobApplications()
        {
            var jobApplications = await _mediator.Send(new GetJobApplyListQuery());
            return jobApplications;
        }

        // GET: api/JobApplications/5
        [HttpGet("{id}")]
        public async Task<JobApplication> GetJobApplication(int id)
        {
            var jobApplication = await _mediator.Send(new GetJobApplyByIdQuery() { Id=id});
           
           // if (jobApplication == null) return NotFound();
            
            return jobApplication;
        }

        // PUT: api/JobApplications/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<JobApplication> PutJobApplication(int id, JobApplication jobApplication)
        {
            #region MediaTr den onceki hali
            //if (id != jobApplication.Id)
            //{
            //    return BadRequest();
            //}

            //_context.Entry(jobApplication).State = EntityState.Modified;

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!JobApplicationExists(id))
            //    {
            //        return NotFound();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return NoContent(); 
            #endregion

            var updatedjob = await _mediator.Send(new UpdateJobapplyCommand(jobApplication.Id, jobApplication.ApplyDate, jobApplication.Company, jobApplication.Position, jobApplication.SearcWebsite, jobApplication.City, jobApplication.State, jobApplication.ZipCode, jobApplication.ApplyingLink));
             
            return updatedjob;
        }

        // POST: api/JobApplications
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<JobApplication> PostJobApplication(JobApplication jobApplication)
        {
            var jobApp = await _mediator.Send(new AddJobapplyCommand(jobApplication.ApplyDate, jobApplication.Company, jobApplication.Position, jobApplication.SearcWebsite, jobApplication.City, jobApplication.State, jobApplication.ZipCode, jobApplication.ApplyingLink));

            return jobApp;
        }

        // DELETE: api/JobApplications/5
        [HttpDelete("{id}")]
        public async Task<int> DeleteJobApplication(int id)
        {
            #region Eski hali 
            //var jobApplication = await _context.JobApplications.FindAsync(id);
            //if (jobApplication == null)
            //{
            //    return NotFound();
            //}

            //_context.JobApplications.Remove(jobApplication);
            //await _context.SaveChangesAsync();

            //return NoContent(); 
            #endregion
            return await _mediator.Send(new DeleteJobapplyCommand() { Id = id });
            
            
        }

        //private bool JobApplicationExists(int id)
        //{
        //    return _context.JobApplications.Any(e => e.Id == id);
        //}
    }
}
