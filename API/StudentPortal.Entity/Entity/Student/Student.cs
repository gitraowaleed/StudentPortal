using System;
namespace StudentPortal.Entity
{
    public class Student
    {
        public int StudentId { get; set; }

        public string StudentName { get; set; } = string.Empty;

        public int CourseId { get; set; }
        public virtual Course Course { get; set; }

        public DateTime? DateCreated { get; set; }

        public DateTime? DateUpdated { get; set; }

        public Student()
        {
            DateCreated = DateTime.UtcNow;
        }
    }
}

