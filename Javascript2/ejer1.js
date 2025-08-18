function generarPassword(longitud) {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
    let password = "";
    for (let i = 0; i < longitud; i++) {
        let aleatorio = Math.floor(Math.random() * caracteres.length);
        password += caracteres[aleatorio];
    }
    return password;
}

console.log("Contraseña generada:", generarPassword(10));
