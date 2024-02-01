let numeroSecreto = 0;
let intentos = 0;
let listaNumSorteados = [];
let numeroMaximo = 10;
let intentosMaximos = 5;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificar() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  /*console.log(numeroUsuario);
  console.log("numero de intentos " + intentos);*/
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumSorteados);

  //Si ya sorteamos todos los numeros
  if (listaNumSorteados.length == intentosMaximos) {
    asignarTextoElemento("p", "Ya sorteaste el numero maximo de juegos posible");
  } else {
    //Si el numero generado esta incluido en la lista
    if (listaNumSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function inicial() {
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //Limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalos de numeros, generar numero aleatorio, inicializar el numero de intentos
  inicial();
  //Deshabilitar el boton de nuevo juegos
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

inicial();
