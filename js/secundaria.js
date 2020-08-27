$(document).ready(function(){

    $("#btnBuscar").click(function(){
        var busqueda = $("#lblpais").val();
        $.getJSON('https://api.thevirustracker.com/free-api?countryTimeline=' + busqueda, function(datos) {
            var dat = datos;
            var fecha = new Date();
            var fec = fecha.getMonth() + 1 + "/" + (fecha.getDate() - 1)  +  "/" + "20" ;
            if (dat != null){
                $("#tblcode").text(dat.countrytimelinedata[0].info.code);
                $("#tblnom").text(dat.countrytimelinedata[0].info.title);
                $("#fechaa").text(fec);
                $("#tblinfectados").text(dat.timelineitems[0][fec].total_cases);
                $("#tblnuevos").text(dat.timelineitems[0][fec].new_daily_cases);
                $("#tblmuertos").text(dat.timelineitems[0][fec].total_deaths);
            }
            else{
                $("#msj").text('Error al consumir la API');
            }
        });
    });
    /*$("#btnBuscar").click(function(){
        const api = new XMLHttpRequest();
        var busqueda = $("#lblpais").val();
        var url ='https://api.thevirustracker.com/free-api?countryTimeline=' + busqueda;
        api.open('get', url, true);
        api.send();
        $("msj").text(" Procesando consulta");
        api.onreadystatechange = function(){
            if(this.status == 200 ){
                var x = JSON.parse(this.responseText);
                alert("hola");
            }
        }
    });*/
});

//Cierra la pestaña (te vuelve hacia la pantalla principal)
function cerrar() { 
    window.open('','_parent',''); 
    window.close(); 
 } 




