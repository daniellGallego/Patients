// dar los valores al check si el pacientes es o no odontologico

//let dentalPatient = document.querySelector('#dentalPatient');


//dentalPatient.addEventListener('click', () => {

//    if (dentalPatient.checked) {
//        dentalPatient.value = "Si";
//    } else {
//        dentalPatient.value = "No";
//    }
//});

$('#dentalPatient').on('click', function() {

    if (dentalPatient.checked) {
        dentalPatient.value = "Si";
    } else {
        dentalPatient.value = "No";
    }
});

// validar el valor del check al precargar los datos del paciente a editar
//window.addEventListener('load', () => {

//    if (dentalPatient.value == "Si") {
//        dentalPatient.checked = true;
//    } else {
//        dentalPatient.checked = false;
//    }
//});

$(window).on('load', function() {

    if (dentalPatient.value == "Si") {
        dentalPatient.checked = true;
    } else {
        dentalPatient.checked = false;
    }
});

// calcular la edad por medio del campo fecha de nacimiento.

let age = document.querySelector('#age');
let birthDate = document.querySelector('#birthDate');

const calculateAge = (birthDate) => {
    const currentDate = new Date();
    const currentYear = parseInt(currentDate.getFullYear());
    const currentMonth = parseInt(currentDate.getMonth()) + 1;
    const currentDay = parseInt(currentDate.getDate());

    const birthYear = parseInt(String(birthDate).substring(0, 4));
    const birthMonth = parseInt(String(birthDate).substring(5, 7));
    const birthDay = parseInt(String(birthDate).substring(8, 10));

    let age = currentYear - birthYear;
    if (currentMonth < birthMonth) {
        age--;
    } else if (currentMonth === birthMonth) {
        if (currentDay < birthDay) {
            age--;
        }
    }
    return age;
}


 //birthDate.addEventListener('change',  function () {
 //    if (this.value) {
 //        age.value = calculateAge(this.value) + " años"
           

 //       }

 //});

$('#birthDate').on('change', function () {
    if (this.value) {
        age.value = calculateAge(this.value) + " años"


    }

});






