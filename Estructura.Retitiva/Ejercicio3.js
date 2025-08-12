let edad = parseInt(prompt("Ingrese su edad:"));
let tieneCedula = prompt("¿Tiene cédula? (si/no)").toLowerCase() === "si";
let cedulaInscrita = prompt("¿Tiene la cédula inscrita? (si/no)").toLowerCase() === "si";

if (edad >= 18 && tieneCedula && cedulaInscrita) {
    console.log("Puede votar.");
} else {
    console.log("No puede votar.");
}