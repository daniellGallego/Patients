namespace Patients.Models
{
    public class Patient
    {
        public string id { get; set; }
        public string name { get; set; }

        public string age { get; set; }

        public Patient()
        {

        }

        public Patient(string pid, string pname, string page)
        {
            this.id = pid;
            this.name = pname;
            this.age = page;
        }

        
    }
}
