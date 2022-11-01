using System;
namespace StudentPortal.Extensions
{
    public class ApiRoutes
    {
        public const string Base = "";
        public static class Student
        {
            public const string Root = Base + "Student";
            public const string GetAll = "GetAll";
            public const string GetById = "GetById/{id}";
            public const string AddUpdate = "AddUpdate";
            public const string Delete = "Delete/{id}";
        }

        public static class Teacher
        {
            public const string Root = Base + "Teacher";
            public const string GetAll = "GetAll";
            public const string GetById = "GetById/{id}";
            public const string AddUpdate = "AddUpdate";
            public const string Delete = "Delete/{id}";
        }

        public static class Course
        {
            public const string Root = Base + "Course";
            public const string GetCourses = "GetCourses";
            public const string GetAll = "GetAll";
            public const string GetById = "GetById/{id}";
            public const string AddUpdate = "AddUpdate";
            public const string Delete = "Delete/{id}";
        }

    }
}

