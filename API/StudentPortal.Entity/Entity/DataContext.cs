using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace StudentPortal.Entity
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            this.Database.EnsureCreated();
        }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Student> Students { get; set; }
    }
}

