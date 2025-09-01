class CuentaBancaria {
  /**
   * Definición de la propiedad saldo como privada
   */
  #saldo;

  /**
   * @param {string} titular
   * @param {number} saldoInicial
   */
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  /**
   * Método que permite realizar el proceso
   * de depositar un valor a la cuenta
   * @param {number} monto
   */
  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
      console.log(`Se depositaron $${monto}. Saldo actual: $${this.#saldo}`);
    } else {
      console.log("El monto debe ser mayor que cero.");
    }
  }

  /**
   * Método que permite retirar dinero
   * siempre y cuando no supere el saldo
   * @param {number} monto
   */
  retirar(monto) {
    if (monto > 0 && monto <= this.#saldo) {
      this.#saldo -= monto;
      console.log(`Se retiraron $${monto}. Saldo actual: $${this.#saldo}`);
    } else {
      console.log("Fondos insuficientes o monto inválido.");
    }
  }

  /**
   * Método que retorna el saldo actual
   * @returns {number}
   */
  obtenerSaldo() {
    return this.#saldo;
  }
}


const cuenta = new CuentaBancaria("Laura", 3500000);

console.log(cuenta); // Muestra el objeto con titular

cuenta.depositar(800000);             // Deposita 800000
console.log(cuenta.obtenerSaldo());   // Muestra: 4300000

cuenta.retirar(2000000);              // Retira 2000000
console.log(cuenta.obtenerSaldo());   // Muestra: 2300000

console.log(cuenta.titular);          // "Laura"
console.log(cuenta.saldo);            // undefined (porque es privado)
