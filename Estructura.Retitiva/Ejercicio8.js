let n = parseInt(prompt("Ingrese un número:"));
let esPrimo = true;

if (n <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

console.log(esPrimo ? `${n} es primo` : `${n} no es primo`);