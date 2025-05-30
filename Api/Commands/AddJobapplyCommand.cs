using Api.Models;
using MediatR;

namespace Api.Commands
{
    public class AddJobapplyCommand: IRequest<JobApplication>
    {
        public DateTime ApplyDate { get; set; }
        public string Company { get; set; }
        public string Position { get; set; }
        public string SearcWebsite { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public string ApplyingLink { get; set; }

        public AddJobapplyCommand(DateTime applyDate, string company, string position, string searcWebsite, string city, string state, string zipCode, string applyingLink)
        {
            ApplyDate = applyDate;
            Company = company;
            Position = position;
            SearcWebsite = searcWebsite;
            City = city;
            State = state;
            ZipCode = zipCode;
            ApplyingLink = applyingLink;
        }
    }
    
}
