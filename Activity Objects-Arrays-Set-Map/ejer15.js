// Autor: Laura Sofía Agredo
// 15. Banco 

// Arreglo global para almacenar las cuentas
let cuentas = [];
let consecutivo = 1;

// Función para generar código de cuenta (año-consecutivo)
function generarCodigo() {
    let year = new Date().getFullYear();
    return `${year}-${consecutivo++}`;
}

// 1. Crear Cuenta
function crearCuenta() {
    let codigo = generarCodigo();
    let fecha = new Date().toLocaleDateString();
    let saldo = 0;
    let cuenta = {
        codigo: codigo,
        fecha: fecha,
        saldo: saldo
    };
    cuentas.push(cuenta);
    console.log(` Cuenta creada con éxito: ${codigo}`);
}

// 2. Consignar a una cuenta
function consignarCuenta(codigo, valor) {
    let cuenta = cuentas.find(c => c.codigo === codigo);
    if (cuenta) {
        cuenta.saldo += valor;
        console.log(` Se consignaron $${valor} a la cuenta ${codigo}. Nuevo saldo: $${cuenta.saldo}`);
    } else {
        console.log(" Cuenta no encontrada.");
    }
}

// 3. Retirar de una cuenta
function retirarCuenta(codigo, valor) {
    let cuenta = cuentas.find(c => c.codigo === codigo);
    if (cuenta) {
        if (cuenta.saldo >= valor) {
            cuenta.saldo -= valor;
            console.log(` Retiro de $${valor} realizado. Nuevo saldo: $${cuenta.saldo}`);
        } else {
            console.log(" Saldo insuficiente.");
        }
    } else {
        console.log(" Cuenta no encontrada.");
    }
}

// 4. Consultar cuenta por código
function consultarCuenta(codigo) {
    let cuenta = cuentas.find(c => c.codigo === codigo);
    if (cuenta) {
        console.log(" Datos de la cuenta:");
        console.log(cuenta);
    } else {
        console.log(" Cuenta no encontrada.");
    }
}

// 5. Listar todas las cuentas
function listarCuentas() {
    if (cuentas.length === 0) {
        console.log(" No hay cuentas registradas.");
    } else {
        console.log(" Listado de cuentas:");
        cuentas.forEach(c => {
            console.log(`Código: ${c.codigo} | Fecha: ${c.fecha} | Saldo: $${c.saldo}`);
        });
    }
}

// Menú principal (simulado en consola)
function menu() {
    console.log(`
===== MENÚ BANCO ADSO =====
1. Crear Cuenta
2. Consignar Cuenta
3. Retirar Cuenta
4. Consultar Cuenta Por Código
5. Listar Cuentas
6. Salir
============================
`);
}

