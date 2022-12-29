function AppViewModel()
{
    
    var self = this;

    self.documentType = ko.observable("");
    self.id = ko.observable("");
    self.name = ko.observable("");
    self.secondName = ko.observable("");
    self.birthDate = ko.observable("");
    self.age = ko.observable("");
    self.gender = ko.observable("");
    self.maritalStatus = ko.observable("");
    self.doctor = ko.observable("");
    self.dentalPatient = ko.observable("");
    self.patients = ko.mapping.fromJS([]);
    self.newPatient = ko.mapping.fromJS({
        documentType: "", id: "", name: "", secondName: "", birthDate: "", age: "", gender: "", maritalStatus: "", doctor: "", dentalPatient: "",
    });

    

    var patients = ko.toJS(self.patients);
    
    $.ajax({
        type: 'GET',
        data: patients,
        url: 'https://localhost:7104/patients/get',
        success: function (data) {
            console.log('data: ', data);
   
            ko.mapping.fromJS(data, self.patients);


        },
        error: function (msg) {
            console.log(msg)

        }

    });


  self.removePatient = function () {

      var patientDelete = ko.mapping.toJS(this.id);
      console.log(patientDelete)
     
      Swal.fire({
              title: "Eliminar Paciente",
              text: "¿Está seguro?",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: "Sí, eliminar",
              confirmButtonColor: "red",
              cancelButtonText: "Cancelar",
          })
          .then(result => {

              if (result.value) {

                  $.ajax({
                      /*url: 'https://localhost:7104/patients/delete?_id=121221',*/
                      url: 'https://localhost:7104/patients/delete?_id=' + patientDelete,
                      type: 'DELETE',
                      contentType: "application/json; charset=utf-8",                    
                      dataType: "json",
                      success: function (data) {    

                         
                          alert("registro eliminado");
                          
                      },
                      //error: function (msg) {
                      //    window.alert("error");

                      //}
                  });

                  location.reload();

                  
              } 
          });
          
        

      
    };


    self.getByid = function () {

        var getPatient = ko.mapping.toJS(this.id);
        console.log(getPatient)


        window.location.href = "https://localhost:44370/PatientEdit?_id=" + getPatient
    }

    

    
}

ko.applyBindings(new AppViewModel());


