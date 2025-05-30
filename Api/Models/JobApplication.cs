using System;
using System.ComponentModel.DataAnnotations;


namespace Api.Models
{
    public class JobApplication
    {
        [Key]
        public int Id { get; set; }
        public DateTime ApplyDate { get; set; }
        public string Company { get; set; }
        public string Position { get; set; }
        public string SearcWebsite { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public string ApplyingLink { get; set; }

    }
}
