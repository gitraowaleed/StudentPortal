using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StudentPortal.Extensions;
using StudentPortal.Entity;
using StudentPortal.Services;
using AutoMapper;
using System.Net;

namespace StudentPortal.API
{
    [Route(ApiRoutes.Student.Root)]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studenService;
        public StudentController(IStudentService studenService)
        {
            _studenService = studenService;
        }


        [HttpGet(ApiRoutes.Student.GetAll)]
        public IEnumerable<Student> Get()
        {
            return _studenService.GetAll();
        }


        [HttpGet(ApiRoutes.Student.GetById)]
        public IActionResult Get(int id)
        {
            return Ok(_studenService.GetById(id));
        }


        [HttpPost(ApiRoutes.Student.AddUpdate)]
        public IActionResult Post([FromBody] Student  student)
        {
            try
            {
                _studenService.AddUpdate(student);
                    return Ok(HttpStatusCode.OK);
            }
            catch (AppException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }


        [HttpGet(ApiRoutes.Student.Delete)]
        public IActionResult Delete(int id)
        {
            try
            {
                if (_studenService.Delete(id))
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

