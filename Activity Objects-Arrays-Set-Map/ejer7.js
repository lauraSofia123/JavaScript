// Autor: Laura Sofía Agredo
// 7. Eliminar duplicados
function eliminiarDuplicados(arreglo) {
    let arregloSinDuplicados = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (!arregloSinDuplicados.includes(arreglo[i])) {
            arregloSinDuplicados.push(arreglo[i]);
        }
    }
    return arregloSinDuplicados;
}

console.log(eliminiarDuplicados([1, 2, 2, 3, 4, 4, 5]));