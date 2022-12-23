<%@ Page Title="About" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Patients.aspx.cs" Inherits="WebApp.Patients" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <br />
    <br />

    <div class="form-group">
        <input type="text" class="form-control pull-right" style="width: 20%" id="search" placeholder="Buscar">
    </div>


    <div class="container pt-5">
        <div class="row p-3">
            <a class="btn btn-primary" href="/PatientCreate" role="button">Crear Paciente</a>
        </div>
        <br />
        <div class="row pt-3">
            <table class="table table-striped display" id="mytable" style="width: 100%">
                <thead class="text-bg-info p-3">
                    <tr>

                        <th class="table-primary" scope="col">Nombre</th>
                        <th class="table-primary" scope="col">Apellidos</th>
                        <th class="table-primary" scope="col">id</th>
                        <th scope="col">Doctor</th>
                        <th scope="col">Odontologico</th>
                        <th scope="col">Acciones</th>

                    </tr>
                </thead>
                <tbody data-bind="foreach: patients">
                    <tr>
                        <td data-bind="text: name"></td>
                        <td data-bind="text: secondName"></td>
                        <td data-bind="text: id"></td>
                        <td data-bind="text: doctor"></td>
                        <td data-bind="text: dentalPatient"></td>
                        <td><a href="#" id="btn-edit" data-bind="click: $parent.editPatient">Edit</a>
                            <a href="#" id="btn-delete" data-bind="click: $parent.removePatient">Delete</a>
                        </td>

                </tbody>
            </table>
        </div>

    </div>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="scripts" runat="server">
    <script src="JS/patients.js"></script>
    <script src ="JS/selects.js"></script>
   
</asp:Content>

