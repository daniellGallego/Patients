function AppViewModel()
{
    var self = this;

    self.id = ko.observable("");
    self.age = ko.observable("");
    
    self.newPatient = ko.mapping.fromJS({
        documentType: "", id: "", name: "", secondName: "", birthDate: "", age: "años", gender: "", maritalStatus: "", doctor: "", dentalPatient: "No",
    });



    self.createPatient = function ()
    {
        // Validar los campos del formulario antes de enviar la información.
        

        validate = document.querySelector("#id").value; if (validate == null || validate.length == 0 || /^\s+$/.test(validate)) {
            alert("diligencie el campo Numero de documento");
            return false;
        }
        validate = document.querySelector("#name").value; if (validate == null || validate.length == 0 || /^\s+$/.test(validate)) {
            alert("diligencie el campo Nombre");
            return false;   
        }
        validate = document.querySelector("#secondname").value; if (validate == null || validate.length == 0 || /^\s+$/.test(validate)) {
            alert("diligencie el campo Apellido");
            return false;
        }
       

        validate = document.querySelector("#doctor").value; if (validate == null || validate.length == 0 || /^\s+$/.test(validate)) {
            alert("diligencie el campo Doctor");
            return false;
        }
        
        

        var newPatient = JSON.stringify(ko.mapping.toJS(self.newPatient));
        console.log(newPatient)
        $.ajax({
            /* url: `${url}api/Patient`,*/
            type: 'POST',
            data: newPatient,
            url: 'https://localhost:7104/patients/create',
            contentType: "application/json; charset=utf-8",
            success: function (data) {

                console.log("datas:", data);
                 
            }

        });
        Swal.fire({
            title: "Paciente creado",
            confirmButtonText: "Aceptar",
            icon: "success",
        })
            .then(result => {
                if (result.value) {
                    window.location.href = "https://localhost:44370/Patients"
                }
            })
        
    }



}

ko.applyBindings(new AppViewModel());
