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
            

            return patients;
        }

        [HttpPost]
        [Route("create")]
        public void CreatePatients([FromBody] Patient patient)
        {
            

            patients.Add(patient);
            

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

            Patient result = patients.Find(p => p.id == _id);



            patients.Remove(result);

            return result;


        }
        [HttpPost]
        [Route("edit")]

        public Patient EditPatient([FromBody] Patient patient)
        {

            var EditPatient = patient;

           var beforePatient = patients.FirstOrDefault(p => p.id == EditPatient.id);

            patients.Remove(beforePatient);
            patients.Add(EditPatient);

            return EditPatient;
        }
    }
}
