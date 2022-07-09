// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  var URLid = window.location.search;
  var params = new URLSearchParams(URLid);
  var id = parseInt(params.get("id"));


  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "./info.json",
  }).done(function (resultado) {
    var listado = resultado.eventos;

    //Busca el elemento en el arreglo
    var idEncontrado = listado.filter((listado) => listado.id.valueOf() === id);

    var evento = document.getElementById("evento");
    evento.innerHTML = "";

    evento.innerHTML += `
     <div class="row col-12 p-3">
         <div class="col-12 rounded text-left bg-white p-3">
         <h3 class="item  m-0">${idEncontrado[0].nombre}</h3>
         <h5 class="item2 text-secondary m-0" >${idEncontrado[0].fecha} - ${idEncontrado[0].lugar}</h5>
         <p class="item3 m-0" >${idEncontrado[0].descripcion}</p>
         <p class="item4 text-info m-0" >Costo: ${idEncontrado[0].precio}</p>
         <p class="item5 text-warning" >Invitados: ${idEncontrado[0].invitados}</p>
         </div>
     </div>`;
  });
});

