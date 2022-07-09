
$(document).ready(function () {
  
  const Url = './info.json';
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: Url,
  }).done(function (resultado) {
    //Guarda el resultado en variables
    fechaActual = resultado.fechaActual;
    var listado = resultado.eventos;

    //Selecciona los eventos que sean posteriores a la fecha actual del JSON
    proximos = listado.filter(
      (listado) => fechaActual.valueOf() < listado.fecha.valueOf()
    );

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    proximos.sort(function (a, b) {
      var reproA = a.fecha;
      var reproB = b.fecha;

      return reproA < reproB ? -1 : reproA < reproB ? 1 : 0;
    });

    var evento = document.getElementById("proximos");
    evento.innerHTML = "";

    for (var i = 0; i < proximos.length; i++) {
      evento.innerHTML += `
             <div class="row col-12 p-3">
                  <div class="col-12 rounded text-left bg-white p-3">
                  <h3 class="titulo  m-0"><a href="detalle.html?id=${proximos[i].id}" role="button">${proximos[i].nombre}</a></h3>
                  <h5 class="titulo text-secondary m-0" >${proximos[i].fecha} - ${proximos[i].lugar}</h5>
                  <p class="titulo m-0" >${proximos[i].descripcion}</p>
                 <p class="titulo text-info" >Costo: ${proximos[i].precio}</p>
                  </div>
             </div>`;
    }
  });

});
