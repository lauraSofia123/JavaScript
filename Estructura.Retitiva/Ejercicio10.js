let veces = parseInt(prompt("Ingrese un número entre 1 y 20:"));
let frase = prompt("Ingrese una frase:");

if (veces >= 1 && veces <= 20) {
    for (let i = 0; i < veces; i++) {
        console.log(frase);
    }
} else {
    console.log("Número fuera de rango");
}