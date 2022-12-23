<%@ Page Title="About" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Patients.aspx.cs" Inherits="WebApp.Patients" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <div class="container">
        <div class="row m-3">
            <br />

            <br />

            <form id="basic-form" method="post">
                <div class="row mb-3">
                    <label for="documentType" class="col-sm-2 col-form-label">Tipo de docuimento :</label>
                    <div class="col-sm-5">
                        <select class="form-select" id="documentType"  data-bind='textInput: newPatient.documentType' required> 
                            <option>Cedula de ciudadania</option>
                            <option>Tarjeta de identidad</option>
                            <option>Registro civil</option>
                            <option>Pasaporte</option>
                            <option>Cedula de extranjeria</option>
                            
                        </select>
                    </div>
                </div>
                <br />

                <div class="row mb-3">
                    <label for="id" class="col-sm-2 col-form-label">Numero de documento :</label>
                    <div class="col-sm-5">
                        <input type="number" class="form-control" id="id"
                            data-bind='textInput: newPatient.id' required>
                    </div>
                </div>
                <br />

                <div class="row mb-3">
                    <label for="name" class="col-sm-2 col-form-label">Nombre :</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="name" data-bind='textInput: newPatient.name' required>
                    </div>
                </div>
                <br />

                <div class="row mb-3">
                    <label for="secondname" class="col-sm-2 col-form-label">Apellidos :</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="secondname" data-bind='textInput: newPatient.secondName' required>
                    </div>
                </div>
                <br />

                <div class="row mb-3">
                    <label for="age" class="col-sm-2 col-form-label">fecha de Nacimiento :</label>
                    <div class="col-sm-10">
                        <input type="date" class="form-control" id="birthDate" data-bind='textInput: newPatient.birthDate' required>
                    </div>
                </div>

                 <div class="row mb-3">
                    <label for="age" class="col-sm-2 col-form-label">edad :</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="age" name="age" value="">
                    </div>
                </div>
                <br />
                  

                 <div class="row mb-3">
                    <label for="gender" class="col-sm-2 col-form-label">Genero :</label>
                    <div class="col-sm-10">
                        <select class="form-select" id="gender" data-bind='textInput: newPatient.gender' required>
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </select>
                    </div>
                </div>
                <br />

                <div class="row mb-3">
                    <label for="maritalstatus" class="col-sm-2 col-form-label">Estado civil :</label>
                    <div class="col-sm-10">
                        <select class="form-select" id="maritalstatus" data-bind='textInput: newPatient.maritalStatus' required> 
                            <option>Soltero</option>
                            <option>Casado</option>
                            <option>Union libre</option>
                            <option>Divorciado</option>
                            <option>Viudo</option>
                            
                        </select>
                    </div>
                </div>
                <br />

                <div class="row mb-3">
                    <label for="doctor" class="col-sm-2 col-form-label">Doctor :</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control m-input  form-control-danger required"
                            id="doctor" data-bind='textInput: newPatient.doctor'>
                    </div>
                </div>
                <br />


                <div class="col-12">
                    <div class="form-check form-switch">
                          <label class="form-check-label" for="dentalPatient">Paciente Odontologico</label>
                           <input class="form-check-input" type="checkbox" role="switch" id="dentalPatient" value="No" name="dentalPatient"
                            data-bind='textInput: newPatient.dentalPatient'>
                      
                    </div>
                    <br />

                    <button type="submit" class="btn btn-primary" data-bind="click: createPatient">Crear</button>
            </form>



        </div>
     

    </div>



</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="scripts" runat="server">
     <script src="JS/patientCreate.js"></script>
      <script src="JS/app.js"></script>

</asp:Content>
