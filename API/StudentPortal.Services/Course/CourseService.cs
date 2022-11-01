using System;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using StudentPortal.Entity;

namespace StudentPortal.Services
{
    public interface ICourseService
    {
        Course GetById(int courseId);
        List<Course> GetAll();
        Course AddUpdate(Course course);
        bool Delete(int courseId);
        List<Course> GetCourses();
    }

    public class CourseService : ICourseService
    {
        public DataContext _dataContext;
        private readonly IMapper _mapper;

        public CourseService(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }

        public Course GetById(int courseId)
        {
            return _dataContext.Courses.Find(courseId);
        }

        public List<Course> GetAll()
        {
            return _dataContext.Courses
                .Include(s =>s.Students)
                .Include(t=>t.Teachers)
                .ToList();
        }

        public List<Course> GetCourses()
        {
            return _dataContext.Courses.ToList();
        }

        public Course AddUpdate(Course course)
        {
            Course courseMD = _dataContext.Courses.Find(course.CourseId);

            if (courseMD == null)
            {
                _dataContext.Courses.Add(course);
            }
            else
            {
                courseMD.DateUpdated = DateTime.Now;
                _mapper.Map(course, courseMD);
                _dataContext.Courses.Update(courseMD);
            }
            _dataContext.SaveChanges();
            return courseMD;
        }


        public bool Delete(int courseId)
        {
            Course courseMD = _dataContext.Courses.Find(courseId);
            if (courseMD != null)
            {
                _dataContext.Courses.Remove(courseMD);
                _dataContext.SaveChanges();
                return true;
            }
            return false;
        }
    }
}

