function AppViewModel()
{
    var self = this;

    self.id = ko.observable("");
    self.gender = ko.observableArray(['Masculino', 'Femenino']);
    self.newPatient = ko.mapping.fromJS({
        documentType: "", id: "", name: "", secondName: "", birthDate: "", gender: "", maritalStatus: "", doctor: "", dentalPatient: "",
    });



    self.createPatient = function ()
    {
        // Validar los campos del formulario antes de enviar la información.
        validate = document.getElementById("id").value; if (validate == null || validate.length == 0 || /^\s+$/.test(validate)) {
            alert("diligencie el campo Numero de documento");
            return false;
        }
        validate = document.getElementById("name").value; if (validate == null || validate.length == 0 || /^\s+$/.test(validate)) {
            alert("diligencie el campo Nombre");
            return false;   
        }
        validate = document.getElementById("secondname").value; if (validate == null || validate.length == 0 || /^\s+$/.test(validate)) {
            alert("diligencie el campo Apellido");
            return false;
        }
        validate = document.getElementById("doctor").value; if (validate == null || validate.length == 0 || /^\s+$/.test(validate)) {
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
                    location.reload();
                }
            })
        
    };

   
 
    //$('form').submit(function () {

    //    var newPatient = ko.toJS(self.newPatient);

    //    console.log("Prueba");
    //    $.ajax({
    //        /* url: `${url}api/Patient`,*/
    //        url: 'https://localhost:7104/patients/create',
    //        type: 'POST',
    //        datatype: 'application/json',
    //        data: newPatient,

    //        success: function (data) {

    //            ko.mapping.fromJS(data);


    //        },
            //error: function (msg) {
            //    console.log(msg)

            //}

    //    });


    //});

    $('#btn-edit').click(function () {

        $.ajax({
            type: 'POST',
            data: self.patients(),
            url: 'https://localhost:7104/patients/edit',
            success: function (data) {
                console.log('data: ', data);

                function EditPatient() {

                    ko.observableArray(data);

                    self.removePatient = function () {
                        self.patients.remove(this);
                    }
                    ko.applyBindings(new EditPatient());

                }

            }
        });

    });




}

ko.applyBindings(new AppViewModel());
