const documentTypes = [
    { id: 0, text: "" },
    { id: 1, text: "Cedula" },
    { id: 2, text: "Tarjeta de identidad" },
    { id: 3, text: "Registro civil" },
    { id: 4, text: "Pasaporte" },
    { id: 5, text: "Cedula de extranjeria" },
];

const genders = [
    { id: 0, text: "" },
    { id: 1, text: "Masculino" },
    { id: 2, text: "Femenino" },

];

const maritalStatus = [
    /*{ id: 0, text: "Seleccione" },*/
    { id: 1, text: "Soltero" },
    { id: 2, text: "Casado" },
    { id: 3, text: "Union libre" },
    { id: 4, text: "Divorsiado" },
    { id: 5, text: "Viudo" },
];

const $select = document.querySelector("#documentType");
const $selectGender = document.querySelector("#gender");
const $selectMaritalStatus = document.querySelector("#maritalstatus");
//empty option
const $option = document.createElement("option")
$option.value = ""
$select.appendChild($option)
$selectGender.appendChild($option)
$selectMaritalStatus.appendChild($option)

documentTypes.forEach(obj => {
    const $option = document.createElement("option")
    $option.value = obj.text
    $option.innerHTML = obj.text
    $select.appendChild($option)
})




maritalStatus.forEach(obj => {
    const $option = document.createElement("option")
    $option.value = obj.text
    $option.innerHTML = obj.text
    $selectMaritalStatus.appendChild($option)
})

genders.forEach(obj => {
    const $option = document.createElement("option")
    $option.value = obj.text
    $option.innerHTML = obj.text
    $selectGender.appendChild($option)
})