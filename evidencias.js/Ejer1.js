// Aquí declaro las variables del valor del celular y el impuesto 
let valorCelular = 80000;
let impuestoIva = 10;

// Aquí calculo el valor del impuesto
let impuestoCalculado = (valorCelular * impuestoIva) / 100;

// Aquí sumo el impuesto al valor base del celular
let totalAPagar = valorCelular + impuestoCalculado;

// Aquí muestro el resultado en la consola
console.log("El total a pagar por el celular es: " + totalAPagar);