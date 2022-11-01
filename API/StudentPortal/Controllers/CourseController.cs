using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StudentPortal.Entity;
using StudentPortal.Services;
using StudentPortal.Extensions;


namespace StudentPortal.API
{
    [Route(ApiRoutes.Course.Root)]
    public class CourseController : ControllerBase
    {
        private readonly ICourseService _courseService;
        public CourseController(ICourseService courseService)
        {
            _courseService = courseService;
        }

        [HttpGet(ApiRoutes.Course.GetCourses)]
        public IEnumerable<Course> GetCourses()
        {
            return _courseService.GetCourses();
        }

        [HttpGet(ApiRoutes.Course.GetAll)]
        public IEnumerable<Course> Get()
        {
            return _courseService.GetAll();
        }


        [HttpGet(ApiRoutes.Course.GetById)]
        public IActionResult Get(int id)
        {
            return Ok(_courseService.GetById(id));
        }


        [HttpPost(ApiRoutes.Course.AddUpdate)]
        public IActionResult Post(Course course)
        {
            try
            {
                _courseService.AddUpdate(course);
                return Ok(HttpStatusCode.OK);
            }
            catch (AppException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }


        [HttpDelete(ApiRoutes.Course.Delete)]
        public IActionResult Delete(int id)
        {
            try
            {
                if (_courseService.Delete(id))
                    return Ok(HttpStatusCode.OK);
            }
            catch (AppException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
            return BadRequest();
        }
    }
}

