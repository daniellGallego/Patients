
//$(document).ready(function () {
//    $("#search").keyup(function () {
//        _this = this; 
//        $.each($("#mytable tbody tr"), function () {
//            if ($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
//                $(this).hide();
//            else
//                $(this).show();
//        });
//    });
//});



$(document).ready(function () {
    var table = $('#mytable').DataTable({
        orderCellsTop: false,
        fixedHeader: true
    });

    //Creamos una fila en el head de la tabla y lo clonamos para cada columna
    $('#mytable thead tr').clone(true).appendTo('#mytable thead');

    $('#mytable thead tr:eq(1) th').each(function (i) {
       
        var title = $(this).text(); //es el nombre de la columna
        if (!(title == 'Acciones')) {
        
            $(this).html('<input type="text" placeholder="buscar' + '" />');

            $('input', this).on('keyup change', function () {
                if (table.column(i).search() !== this.value) {
                    table
                        .column(i)
                        .search(this.value)
                        .draw();
                }
            });
        }
    });
});

