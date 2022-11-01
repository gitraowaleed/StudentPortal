using System;
namespace StudentPortal.Entity
{
    public class Teacher
    {

        public int TeacherId  { get; set; }

        public string TeacherName { get; set; } = string.Empty;
        public int CourseId { get; set; }
        public virtual Course Course { get; set; }

        public DateTime? DateCreated { get; set; }

        public DateTime? DateUpdated { get; set; }

        public Teacher()
        {
            DateCreated = DateTime.UtcNow;
        }
    }
}

