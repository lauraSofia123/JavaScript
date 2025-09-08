// Importación de la función desde utilidades4.js
import { nivelRiesgo } from './utilidades4.js';

console.log(nivelRiesgo(75, false)); // Alto riesgo (por edad > 60)
console.log(nivelRiesgo(60, true));  // Alto riesgo (por enfermedades)
console.log(nivelRiesgo(35, true));  // Medio riesgo (por enfermedades)
console.log(nivelRiesgo(40, false)); // Bajo riesgo
