using System;
using AutoMapper;
using StudentPortal.Entity;

namespace StudentPortal.Services
{
    public interface IStudentService
    {
        Student GetById(int studentId);
        IEnumerable<Student> GetAll();
        Student AddUpdate(Student student);
        bool Delete(int studentId);
    }


    public class StudentService  : IStudentService
    {
        public DataContext _dataContext;
        private readonly IMapper _mapper;

        public StudentService(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }

        public Student GetById(int studentId)
        {
            return _dataContext.Students.Find(studentId);
        }

        public IEnumerable<Student> GetAll()
        {
            return _dataContext.Students.ToList();
        }

        public Student AddUpdate(Student student)
        {
            Student studentMD = _dataContext.Students.Find(student.StudentId);

            if (studentMD == null)
            {
                _dataContext.Students.Add(student);
            }
            else
            {
                studentMD.DateUpdated = DateTime.Now;
                _mapper.Map(student, studentMD);
                _dataContext.Students.Update(studentMD);
            }
            _dataContext.SaveChanges();
            return studentMD;
        }


        public bool Delete(int studentId)
        {
            Student studentMD = _dataContext.Students.Find(studentId);
            if (studentMD != null)
            {
                _dataContext.Students.Remove(studentMD);
                _dataContext.SaveChanges();
                return true;
            }
            return false;
        }
    }
}

