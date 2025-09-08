let edadCliente = parseInt(prompt("Ingrese su edad:"));
let precio = 0;

if (edadCliente < 5) {
    precio = 0;
} else if (edadCliente <= 18) {
    precio = 5000;
} else {
    precio = 10000;
}
console.log(`El precio de la entrada es $${precio}`);