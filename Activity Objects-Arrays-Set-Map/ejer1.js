// Autor: Laura Sofía Agredo
// 1. Función para generar contraseñas
function generarContrasena() {
    const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minus = "abcdefghijklmnopqrstuvwxyz";
    const digitos = "0123456789";
    const especiales = "@#$%&()=?¿*+[]{}";

    function randomChar(str) {
        return str[Math.floor(Math.random() * str.length)];
    }

    let contrasena = "";
    for (let i = 0; i < 2; i++) contrasena += randomChar(mayus);
    for (let i = 0; i < 2; i++) contrasena += randomChar(minus);
    for (let i = 0; i < 2; i++) contrasena += randomChar(digitos);
    for (let i = 0; i < 2; i++) contrasena += randomChar(especiales);

    return contrasena.split("").sort(() => Math.random() - 0.5).join("");
}
console.log("Contraseña:", generarContrasena());
