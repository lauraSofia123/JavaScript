let elecciones = {
    totalAptos: 50,
    votosEmitidos: 0,
    candidato1: 0,
    candidato2: 0,
    candidato3: 0,
    blanco: 0,
    cerrada: false,
    clave: "1234",

    votar: function(opcion) {
        if (this.cerrada) {
            console.log("Elecciones cerradas.");
            return;
        }
        if (opcion === 1) {
            this.candidato1++;
        } else if (opcion === 2) {
            this.candidato2++;
        } else if (opcion === 3) {
            this.candidato3++;
        } else if (opcion === 4) {
            this.blanco++;
        } else {
            console.log("Opción inválida.");
            return;
        }
        this.votosEmitidos++;
        if (this.votosEmitidos >= this.totalAptos) {
            this.cerrada = true;
            console.log("Se alcanzaron los 50 votos. Elecciones cerradas.");
        }
    },

    cerrarElecciones: function(claveIngresada) {
        if (claveIngresada === this.clave) {
            this.cerrada = true;
            console.log("Elecciones cerradas manualmente.");
        } else {
            console.log("Clave incorrecta.");
        }
    },

    reporte: function() {
        console.log("----- REPORTE FINAL -----");
        console.log("Personas que votaron:", this.votosEmitidos);
        console.log("Candidato 1:", this.candidato1);
        console.log("Candidato 2:", this.candidato2);
        console.log("Candidato 3:", this.candidato3);
        console.log("Votos en blanco:", this.blanco);
    }
};