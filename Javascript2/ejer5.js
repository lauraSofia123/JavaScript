function contarPalabras(texto) {
    let palabras = texto.trim().split(/\s+/);
    return palabras.length;
}

console.log("Número de palabras:", contarPalabras("Hola soy estudiante de ADSO"));
