let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let pares = numeros.filter(function(n) {
    return n % 2 === 0;
});
console.log("Cantidad de pares:", pares.length);
