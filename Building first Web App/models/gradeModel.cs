using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Building_first_Web_App.models
{
    //create a class for the grade input
    public class gradeModel
    {
        // declare some variables and give them get and set method
        // put some range controls to make it from 0-100

        [Range(0, 100)]
        public string assignments { get; set; }
        [Range(0,100)]
        public string groupAssignments { get; set; }
        [Range(0, 100)]
        public string quiz { get; set; }
        [Range(0, 100)]
        public string midterm { get; set; }
        [Range(0, 100)]
        public string final { get; set; }
        [Range(0, 100)]
        public string intex { get; set; }
        public string output { get; set; }
    }
}
