using Microsoft.AspNetCore.DataProtection.Repositories;
using Microsoft.AspNetCore.Mvc;
using Patients.Infrastructure;
using Patients.Models;

using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;

namespace Patients.Controllers
{
    [ApiController]
    [Route("patients")]
    public class PatientController : ControllerBase
    {
        Repository repository;

        public PatientController()
        {
            repository = new Repository();  
        }
        private static List<Patient> patients = new List<Patient>();
        [HttpGet]
        [Route("get")]
        public List<Patient> GetPatients()
        {
            Patient newPatient = new Patient()
            {
                id = "1",
                name = "Daniel",
                birthDate = "30"
            };
            repository.Create(newPatient);
            return patients;
        }

        [HttpPost]
        [Route("create")]
        public void Post([FromBody] Patient patient)
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

        [HttpDelete]
        [Route("delete")]

        public void Delete(string _id)
        {

            Patient result = patients.Find(p => p.id == _id);



            patients.Remove(result);

            


        }

        [HttpPut]
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
