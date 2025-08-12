let num = parseInt(prompt("Ingrese un número entero:"));
let suma = 0;
let temp = num;

while (temp > 0) {
    suma += temp % 10;
    temp = Math.floor(temp / 10);
}
console.log(`La suma de los dígitos de ${num} es ${suma}`);