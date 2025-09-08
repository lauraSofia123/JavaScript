// Importación de la función desde utilidades4.js
import { nivelRiesgo } from './utilidades4.js';

console.log(nivelRiesgo(60, false)); // Alto riesgo
console.log(nivelRiesgo(55, true));  // Alto riesgo (por enfermedades)
console.log(nivelRiesgo(20, true));  // Medio riesgo (por enfermedades)
console.log(nivelRiesgo(35, false)); // Bajo riesgo
