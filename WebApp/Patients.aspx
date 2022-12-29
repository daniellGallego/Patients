<%@ Page Title="About" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Patients.aspx.cs" Inherits="WebApp.Patients" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
     <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
    <link rel="" href="https://cdn.datatables.net/fixedheader/3.1.6/css/fixedHeader.dataTables.min.css">
</asp:Content>
<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <br />
    <br />



    <div class="container pt-5">
        <div class="row p-3">
            <a class="btn btn-primary" href="/PatientCreate" role="button">Crear Paciente</a>
        </div>
        <br />
        <div class="row pt-3">
            <table class="table table-striped display table table-striped-columns table-bordered table-sm" id="mytable" style="width: 100%">
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
                        <td data-bind="text: name" ></td>
                        <td data-bind="text: secondName"></td>
                        <td data-bind="text: id"></td>
                        <td data-bind="text: doctor"></td>
                        <td data-bind="text: dentalPatient"></td>
                        <td><a  id="btn-edit" data-bind="click: $parent.getByid"><i class="fa-solid fa-pen-to-square"></i></a>
                            <a href="#" id="btn-delete" data-bind="click: $parent.removePatient"><i class="fa-solid fa-trash text-danger"></i></a>
                        </td>

                </tbody>
            </table>
        </div>

    </div>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="scripts" runat="server">
    <script src="JS/patients.js"></script>
    <script src ="JS/search.js"></script>
   
</asp:Content>

