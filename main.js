let historial = [];

function Operacion(num1, num2, operacion, resultado) {
  this.num1 = num1;
  this.num2 = num2;
  this.operacion = operacion;
  this.resultado = resultado;
}

function sumar(num1, num2) {
  let resultado = num1 + num2;
  historial.push(new Operacion(num1, num2, '+', resultado));
  return resultado;
}

function restar(num1, num2) {
  let resultado = num1 - num2;
  historial.push(new Operacion(num1, num2, '-', resultado));
  return resultado;
}

function multiplicar(num1, num2) {
  let resultado = num1 * num2;
  historial.push(new Operacion(num1, num2, '*', resultado));
  return resultado;
}

function dividir(num1, num2) {
  if (num2 === 0) {
    let error = "Error: No se puede dividir entre cero.";
    historial.push(new Operacion(num1, num2, '/', error));
    return error;
  }
  let resultado = num1 / num2;
  historial.push(new Operacion(num1, num2, '/', resultado));
  return resultado;
}

function porcentaje(num1, porciento) {
  let resultado = (num1 * porciento) / 100;
  historial.push(new Operacion(num1, porciento, '%', resultado));
  return resultado;
}

function mostrarHistorial() {
  let mensaje = "Historial de operaciones:\n";
  historial.forEach(function (operacion) {
    mensaje += operacion.num1 + " " + operacion.operacion + " " + operacion.num2 + " = " + operacion.resultado + "\n";
  });
  alert(mensaje);
}


let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));
let operacion = prompt("Ingrese la operación que desea realizar (+, -, *, / o %): ");

let resultado;

switch (operacion) {
  case "+":
    resultado = sumar(num1, num2);
    break;
  case "-":
    resultado = restar(num1, num2);
    break;
  case "*":
    resultado = multiplicar(num1, num2);
    break;
  case "/":
    resultado = dividir(num1, num2);
    break;
  case "%":
    resultado = porcentaje(num1, num2);
    break;
  default:
    resultado = "Error: Operación no válida.";
    break;
}

alert("El resultado de la operación es: " + resultado);

mostrarHistorial();