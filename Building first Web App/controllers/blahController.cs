using Building_first_Web_App.models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Building_first_Web_App.controllers
{
    public class blahController : Controller
    {
        //make the controllers call the functions
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult grade()
        {
            return View();
        }

        [HttpPost]
        public IActionResult grade(gradeModel model)
        {
            return View();
        }
    }
}
