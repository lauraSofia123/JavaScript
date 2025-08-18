function contarVocales(texto) {
    let vocales = "aeiou";
    let contador = 0;
    for (let letra of texto) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

console.log("Número de vocales:", contarVocales("Hola Mundo"));
