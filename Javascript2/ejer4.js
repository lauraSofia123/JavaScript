let valores = [5, 10, 15, 20];
let suma = valores.reduce(function(acum, n) {
    return acum + n;
}, 0);
let promedio = suma / valores.length;

console.log("Suma:", suma);
console.log("Promedio:", promedio);
