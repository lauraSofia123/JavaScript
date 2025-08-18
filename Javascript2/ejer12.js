let productos = new Map();
productos.set(1, { nombre: "Arroz", precio: 2500 });
productos.set(2, { nombre: "Leche", precio: 3500 });
productos.set(3, { nombre: "Pan", precio: 2000 });

let carrito = new Set();
carrito.add(productos.get(1));
carrito.add(productos.get(3));

let listaCarrito = Array.from(carrito);
console.log("Carrito de compras:", listaCarrito);
