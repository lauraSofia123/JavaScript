// Importación de la función desde utilidades6.js
import { esElegibleParaPrestamo } from './utilidades6.js';

console.log(esElegibleParaPrestamo(4500000, 600));  // Elegible
console.log(esElegibleParaPrestamo(1500000, 600));  // No elegible
console.log(esElegibleParaPrestamo(6000000, 700));  // Elegible
