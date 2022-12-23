using Patients.Models;

namespace Patients.Infrastructure
{
    public class Repository
    {
        private static List<Patient> patients = new List<Patient>();

        public void Create(Patient patient)
        {
            patients.Add(patient);
        }

    }
}
