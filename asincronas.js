// FUNCIONES ASINCRONAS → Delega su procesamiento
/*
console.log("Inicio");


function dos() {
    setTimeout(function() { // Se delega a setTimeout para que espere 4seg antes de ejecutar la función
        console.log("Dos");
    }, 1000);
}

function uno() {
    setTimeout(function() {
        console.log("Uno");
    }, 0);
    dos();
    console.log("Tres");
}

uno();
console.log("Fin");
*/
//////////////////////////////////////////////////

console.log("Hola");

setTimeout(function() {
    console.log("Mundo");
}, 4 * 1000);

console.log("Hola a los participantes");