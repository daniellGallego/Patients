function AppViewModel()
{
    var url = "https://localhost:7104/"
    var self = this;

    self.documentType = ko.observable("");
    self.id = ko.observable("");
    self.name = ko.observable("");
    self.secondName = ko.observable("");
    self.birthDate = ko.observable("");
    self.gender = ko.observable("");
    self.maritalStatus = ko.observable("");
    self.doctor = ko.observable("");
    self.dentalPatient = ko.observable("");
    self.patients = ko.mapping.fromJS([]);
    self.newPatient = ko.mapping.fromJS({
        documentType: "", id: "", name: "", secondName: "", birthDate: "", gender: "", maritalStatus: "", doctor: "", dentalPatient: "",
    });

    

    self.createPatient = function () {

    };

    var patients = ko.toJS(self.patients);
    
    $.ajax({
        type: 'GET',
        data: patients,
        url: 'https://localhost:7104/patients/get',
      /*  url: `${url}api/Patient`,*/
        success: function (data) {
            console.log('data: ', data);
   
           /* ko.observableArray(data);*/
            ko.mapping.fromJS(data, self.patients);


        },
        error: function (msg) {
            console.log(msg)

        }

    });


  self.removePatient = function () {

      var patienDelete = ko.mapping.toJS(this.id);
      console.log(patienDelete)
     
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
                      url: 'https://localhost:7104/patients/delete?_id=' + patienDelete,
                      type: 'DELETE',
                      contentType: "application/json; charset=utf-8",                    
                      dataType: "json",
                      success: function () {                        
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



    //$('#btn-edit').click(function () {

    //    $.ajax({
    //        type: 'POST',
    //        data: self.patients(),
    //        url: 'https://localhost:7104/patients/edit',
    //        success: function (data) {
    //            console.log('data: ', data);

    //            function EditPatient() {

    //                ko.observableArray(data);

    //                self.removePatient = function () {
    //                    self.patients.remove(this);
    //                }
    //                ko.applyBindings(new EditPatient());

    //            }

    //        }
    //    });

    //});
    
    

    
}

ko.applyBindings(new AppViewModel());


