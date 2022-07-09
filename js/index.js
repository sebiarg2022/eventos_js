$(document).ready(function () {
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "./info.json",
  }).done(function (resultado) {
    //Guarda el resultado en variables
    var fechaActual = resultado.fechaActual;
    var listado = resultado.eventos;

    //Selecciona los eventos que sean posteriores a la fecha actual del JSON
    proximos = listado.filter(
      (listado) => fechaActual.valueOf() < listado.fecha.valueOf()
    );

    //Selecciona los eventos que sean posteriores a la fecha actual del JSON
    pasados = listado.filter(
      (listado) => fechaActual.valueOf() > listado.fecha.valueOf()
    );

    //Ordena los eventos prox segun la fecha (los mas cercanos primero)
    proximos.sort(function (a, b) {
      var reproA = a.fecha;
      var reproB = b.fecha;

      return reproA < reproB ? -1 : reproA < reproB ? 1 : 0;
    });

    //Ordena los eventos pasados segun la fecha (los mas cercanos primero)
    pasados.sort(function (a, b) {
      var reproA = a.fecha;
      var reproB = b.fecha;

      return reproA > reproB ? -1 : reproA < reproB ? 1 : 0;
    });

    var eventoProximo = document.getElementById("proximos");
    eventoProximo.innerHTML = "";

    for (var i = 0; i < 2; i++) {
      eventoProximo.innerHTML += `
            <div class="row col-6 p-3 m-auto">
                  <div class="col-12 rounded text-left bg-white p-3">
                  <h3 class="titulo  m-0"><a href="detalle.html?id=${proximos[i].id}" role="button">${proximos[i].nombre}</a></h3>
                  <h5 class="titulo text-secondary m-0" >${proximos[i].fecha}</h5>
                  <p class="titulo m-0" >${proximos[i].descripcion}</p>
                  </div>
             </div>`;
    }

    var eventoPasado = document.getElementById("pasados");
    eventoPasado.innerHTML = "";

    for (var i = 0; i < 2; i++) {
      eventoPasado.innerHTML += `
             <div class="row col-6 p-3 m-auto">
                  <div class="col-12 rounded text-left bg-white p-3">
                  <h3 class="titulo  m-0"><a href="detalle.html?id=${pasados[i].id}" role="button">${pasados[i].nombre}</a></h3>
                  <h5 class="titulo text-secondary m-0" >${pasados[i].fecha}</h5>
                  <p class="titulo m-0" >${pasados[i].descripcion}</p>
                  </div>
             </div>`;
    }
  });
});
