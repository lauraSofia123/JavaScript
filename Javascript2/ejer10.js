let frutas = ["manzana", "pera", "uva", "mango"];
let indiceFruta = frutas.indexOf("uva");

if (indiceFruta !== -1) {
    frutas[indiceFruta] = "naranja";
}

console.log("Arreglo modificado:", frutas);
