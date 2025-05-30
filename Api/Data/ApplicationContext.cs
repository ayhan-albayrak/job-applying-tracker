using Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Api.Data
{
    /* bunu ekledigimizde. DbContext yerine IdentityDbContext kullanmamiz gerekiyor.
     Microsoft.AspNetCore.Identity.EntityFrameworkCore;
     */
    public class ApplicationContext : IdentityDbContext
    {
        public ApplicationContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<JobApplication> JobApplications { get; set; } = null!;
    }
}
