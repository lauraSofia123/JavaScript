// Pedimos el número de personas
let personas = prompt("¿Cuántas personas comerán torta de papa?");
personas = parseInt(personas);

// Calculamos los ingredientes
let gramosPapa = personas * 200;
let huevos = (gramosPapa / 1000) * 5;
let gramosCebolla = (gramosPapa / 1000) * 300;

// Mostramos los resultados
console.log("Papa: " + gramosPapa + " gramos");
console.log("Huevos: " + huevos);
console.log("Cebolla: " + gramosCebolla + " gramos");
