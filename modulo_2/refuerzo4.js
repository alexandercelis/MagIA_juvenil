var videojuegos = [
    ["free fire", "COD"],
    ["Among Us", "Roblox"]
];

console.log(videojuegos[0]); // → Muestra el array index 0
console.log(videojuegos[0][1]); // → Muestra el index 1 del array 0

//Descomposición de objetos 
var producto = {
    nombre: "chocolate",
    precio: "10.000",
    peso: "0.5kl"
}

var { nombre, precio } = producto;
console.log(nombre);
console.log(precio);

// -----------------
