// FUNCIONES ASINCRONAS → Delega su procesamiento
/*
console.log("Inicio");

function dos() {
    setTimeout(function() { // Se delega a setTimeout para que espere 4seg antes de ejecutar la función
        console.log("Dos");
    }, 4000);                 <---Milisegundos que se esperan para enviar la función 
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

//////////////////////////////////////////////////

console.log("Hola"); //

setTimeout(function() {
    console.log("Mundo");
}, 4 * 1000);

console.log("Hola a los participantes");
*/
function primero(callback) {
    setTimeout(function() {
        return callback("Primero");
    }, 5 * 1000);
}

function segundo(callback) {
    return callback("Segundo");
}

primero(function(resultado1) { // 
    console.log(resultado1); //
    segundo(function(resultado2) { // segundo solo se ejecutará despues de primero
        console.log(resultado2);
    })
});