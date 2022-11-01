using System;
using AutoMapper;
using StudentPortal.Entity;

namespace StudentPortal.Services
{
    public interface ITeacherService
    {
        Teacher GetById(int teacherId);
        IEnumerable<Teacher> GetAll();
        Teacher AddUpdate(Teacher teacher);
        bool Delete(int teacherId);
    }

    public class TeacherService : ITeacherService
    {
        public DataContext _dataContext;
        private readonly IMapper _mapper;

        public TeacherService(DataContext dataContext,IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }

        public Teacher GetById(int teacherId)
        {
            return _dataContext.Teachers.Find(teacherId);
        }

        public IEnumerable<Teacher> GetAll()
        {
            return _dataContext.Teachers.ToList();
        }


        public Teacher AddUpdate(Teacher teacher)
        {
            Teacher teacherMD = _dataContext.Teachers.Find(teacher.TeacherId);

            if (teacherMD == null)
            {
                _dataContext.Teachers.Add(teacherMD);
            }
            else
            {
                teacherMD.DateUpdated = DateTime.Now;
                _mapper.Map(teacher, teacherMD);
                _dataContext.Teachers.Update(teacherMD);
            }
            _dataContext.SaveChanges();
            return teacherMD;
        }

        public bool Delete(int teacherId)
        {
            Teacher teacherMD = _dataContext.Teachers.Find(teacherId);
            if (teacherMD != null)
            {
                _dataContext.Teachers.Remove(teacherMD);

                _dataContext.SaveChanges();
                return true;
            }
            return false;
        }
    }
}

