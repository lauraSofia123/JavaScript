// Autor: Laura Sofía Agredo
// 8. Mayúsculas
function nombresMayusculas(nombres) {
    return nombres.map(nombre => nombre.toUpperCase());
}

console.log(nombresMayusculas(['ANA', 'JUAN', 'PEDRO']));