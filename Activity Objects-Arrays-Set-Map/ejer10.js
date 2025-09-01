// Autor: Laura Sofía Agredo
// 10. Reemplazo de elemento
function reemplazar(arreglo, viejo, nuevo) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === viejo) {
            arreglo[i] = nuevo; // reemplazo
            break;              // detengo ciclo
        }
    }
    return arreglo;
}

let numeros = [10, 20, 30];
console.log(reemplazar(numeros, 20, 99));