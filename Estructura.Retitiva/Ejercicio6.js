let salario = parseFloat(prompt("Ingrese su salario mensual:"));
let impuesto = 0;

if (salario <= 2000000) {
    impuesto = 0;
} else if (salario <= 5000000) {
    impuesto = salario * 0.10;
} else {
    impuesto = salario * 0.20;
}

console.log(`El impuesto a pagar es $${impuesto}`);