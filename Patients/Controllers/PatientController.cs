using Microsoft.AspNetCore.Mvc;
using Patients.Models;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;

namespace Patients.Controllers
{
    [ApiController]
    [Route("patients")]
    public class PatientController : ControllerBase
    {
        private static List<Patient> patients = new List<Patient>();
        [HttpGet]
        [Route("get")]
        public List<Patient> GetPatients()
        {
            //patients.Add(
            //    new Patient
            //    {
            //        id = "1",
            //        name = "Daniel",
            //        age = "31"

            //    });
            //patients.Add(
            //new Patient
            //{
            //    id = "2",
            //    name = "Alejandro",
            //    age = "25"
            //});

            return patients;
        }

        [HttpPost]
        [Route("create")]
        public void CreatePatients(string _id, string _name, string _age)
        {
            

            patients.Add(new Patient(_id, _name, _age));
            

        }
        [HttpGet]
        [Route("getbyid")]

        public Patient GetById(string _id)
        {


            Patient result = patients.Find(p => p.id == _id);



            return result;
        }
        [HttpGet]
        [Route("delete")]

        public Patient DeletePatient(string _id)
        {


          
        }
        [HttpGet]
        [Route("edit")]

        public Patient EditPatient(string _id)
        {


            
        }
    }
}
