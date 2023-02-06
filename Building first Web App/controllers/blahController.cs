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

        // get controller
        [HttpGet]
        public IActionResult grade()
        {
            return View();
        }

        // Post controller
        [HttpPost]
        public IActionResult grade(gradeModel model)
        {
            return View();
        }
    }
}
