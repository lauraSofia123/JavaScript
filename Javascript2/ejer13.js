let alumno = {
    nombre: "Sofia",
    notas: [4.5, 4.0, 3.8, 4.2, 4.8],

    promedio: function() {
        let suma = this.notas.reduce(function(acum, nota) {
            return acum + nota;
        }, 0);
        let prom = suma / this.notas.length;
        return prom.toFixed(2);
    }
};

console.log("Alumno:", alumno.nombre);
console.log("Notas:", alumno.notas);
console.log("Promedio:", alumno.promedio());
