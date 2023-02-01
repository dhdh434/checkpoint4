using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Building_first_Web_App.controllers
{
    public class blahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
