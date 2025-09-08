let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));

let sumaPares = 0;
let sumaImpares = 0;
let conteoImpares = 0;

for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    } else {
        sumaImpares += i;
        conteoImpares++;
    }
}

let promedioImpares = conteoImpares > 0 ? sumaImpares / conteoImpares : 0;

console.log(`Suma de pares: ${sumaPares}`);
console.log(`Promedio de impares: ${promedioImpares}`);