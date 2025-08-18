let banco = {
    cuentas: new Map(),
    consecutivo: 1,

    generarCodigo: function() {
        let year = new Date().getFullYear();
        let codigo = year + "-" + this.consecutivo;
        this.consecutivo++;
        return codigo;
    },

    crearCuenta: function() {
        let codigo = this.generarCodigo();
        let cuenta = {
            codigo: codigo,
            fechaCreacion: new Date(),
            saldo: 0
        };
        this.cuentas.set(codigo, cuenta);
        console.log("Cuenta creada:", cuenta);
        return codigo;
    },

    consignar: function(codigo, monto) {
        let cuenta = this.cuentas.get(codigo);
        if (!cuenta) return console.log("La cuenta no existe.");
        if (monto <= 0) return console.log("Monto inválido.");
        cuenta.saldo += monto;
        console.log("Consignación realizada. Nuevo saldo:", cuenta.saldo);
    },

    retirar: function(codigo, monto) {
        let cuenta = this.cuentas.get(codigo);
        if (!cuenta) return console.log("La cuenta no existe.");
        if (monto <= 0) return console.log("Monto inválido.");
        if (monto > cuenta.saldo) return console.log("Fondos insuficientes.");
        cuenta.saldo -= monto;
        console.log("Retiro realizado. Nuevo saldo:", cuenta.saldo);
    },

    consultar: function(codigo) {
        let cuenta = this.cuentas.get(codigo);
        if (!cuenta) return console.log("La cuenta no existe.");
        console.log("Cuenta:", cuenta);
    },

    listar: function() {
        console.log("----- LISTADO DE CUENTAS -----");
        for (let cuenta of this.cuentas.values()) {
            console.log(cuenta);
        }
    }
};