//formulario
const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("input");

//limpiar Formulario
function limpiarErrores() {
  //guardo en var errores todos los elementos de clase error
  var errores = document.getElementsByClassName("text-danger");
  //limpiamos
  for (var i = 0; i < errores.length; i++) {
    errores[i].innerHTML = "";
  }
}

//validacion formulario
function validar(formulario) {
  //llamamos a la funcion a limpiar
  limpiarErrores();

  //validacion nombres
  if (formulario.nombres.value.length == 0) {
    document.getElementById("errorNombres").innerText =
      "Este campo es obligatorio";
    formulario.nombres.focus();
    return false;
  }

  //validacion email
  if (formulario.email.value.length == 0) {
    document.getElementById("errorEmail").innerText =
      "Este campo es obligatorio";
    formulario.email.focus();
    return false;
  }

  //expresion regular para validar un email
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "Email Invalido";
    formulario.email.focus();
    return false;
  }

  //validacion password
  if (formulario.password.value.trim().length == 0) {
    document.getElementById("errorContrasena").innerText = "Campo obligatorio";
    formulario.password.focus();
    return false;
  }

  if (formulario.password.value.trim().length < 7) {
    document.getElementById("errorContrasena").innerText =
      "Contraseña Invalida (Mínimo debe tener 7 caracteres)";
    formulario.password.focus();
    return false;
  }

  //validacion coincidencia password
  if (formulario.password.value != formulario.confirmacion.value) {
    document.getElementById("errorConfirmacion").innerText =
      "Las contraseñas no coinciden";
    formulario.confirmacion.focus();
    return false;
  }

  //validacion tipo de usuario
  if (formulario.tipo.value == "" || formulario.tipo.value < 1) {
    document.getElementById("errorTipo").innerText =
      "Este campo es obligatorio";
    return false;
  }

  if (!formulario.acepto.checked) {
    document.getElementById("errorAcepto").innerText =
      "Debe aceptar los términos y condiciones";
    return false;
  }

  alert("Registro Exitoso");

  return true;
}
