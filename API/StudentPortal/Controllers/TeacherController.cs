using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StudentPortal.Entity;
using StudentPortal.Extensions;
using StudentPortal.Services;

namespace StudentPortal.API
{
    [Route(ApiRoutes.Teacher.Root)]
    public class TeacherController : ControllerBase
    {
        private readonly ITeacherService _teacherService;
        public TeacherController(ITeacherService teacherService)
        {
            _teacherService = teacherService;
        }


        [HttpGet(ApiRoutes.Teacher.GetAll)]
        public IEnumerable<Teacher> Get()
        {
            return _teacherService.GetAll();
        }


        [HttpGet(ApiRoutes.Teacher.GetById)]
        public IActionResult Get(int id)
        {
            return Ok(_teacherService.GetById(id));
        }


        [HttpPost(ApiRoutes.Teacher.AddUpdate)]
        public IActionResult Post(Teacher teacher)
        {
            try
            {
                _teacherService.AddUpdate(teacher);
                return Ok(HttpStatusCode.OK);
            }
            catch (AppException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }


        [HttpDelete(ApiRoutes.Teacher.Delete)]
        public IActionResult Delete(int id)
        {
            try
            {
                if (_teacherService.Delete(id))
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

