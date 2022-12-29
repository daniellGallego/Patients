function editViewModel() {
    var self = this;

    self.id = ko.observable("");

    self.newPatient = ko.mapping.fromJS({
        documentType: "", id: "", name: "", secondName: "", birthDate: "", age: "", gender: "", maritalStatus: "", doctor: "", dentalPatient: "",
    });
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var patientId = urlParams.get('_id');



    $.ajax({
        url: 'https://localhost:7104/patients/getbyid?_id=' + patientId,
    type: 'GET',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {

        var prueba = ko.mapping.fromJS(data, self.newPatient);
        console.log(prueba)

    },
    //error: function (msg) {
    //    window.alert("error");

    //}
});

    self.editPatient = function () {
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
        validate = document.querySelector("#birthDate").value; if (!(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/.test(validate))) {
            alert("diligencie la fecha de nacimiento");
            return false;
        }

        validate = document.querySelector("#doctor").value; if (validate == null || validate.length == 0 || /^\s+$/.test(validate)) {
            alert("diligencie el campo Doctor");
            return false;
        }



        var EditPatient = JSON.stringify(ko.mapping.toJS(self.newPatient));
        console.log(EditPatient)
        $.ajax({
           
            type: 'PUT',
            data: EditPatient,
            url: 'https://localhost:7104/patients/edit',
            contentType: "application/json; charset=utf-8",
            success: function (data) {

                console.log("datas:", data);

            }

        });
        Swal.fire({
            title: "Datos Guardados",
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

ko.applyBindings(new editViewModel());