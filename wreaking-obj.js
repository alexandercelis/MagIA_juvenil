var person = {
        firstName: "Omar",
        lastName: "Guerrero",
        age: 32
    }
    //La descomposición permite almacenar las caracteristicas del objeto
    //.. en variables independientes para accesar a ellas más facilmente
var { firstName, lastName } = person;
console.log("The name of participant is:  " + firstName + " " + lastName)

//EJEMPLO 2 ↓↓↓ 
let celular = { color: "rojo", numberCams: 4 };
let { color, numberCams } = celular;
console.log(numberCams);
console.log(color);

//EJEMPLO 3 ↓↓↓
let options = {
    title: "Top Menu",
    items: ["Item1", "Item2"]
};

function showMenu({ title = "lorem", width = 200, height = 100, items = [] }) {
    console.log(`${title} ${width} ${height}`); //imprime Top Menu 200 100
    console.log(items); //imprime ["Item1", "Item2"]
}
showMenu(options);

// EJEMPLO 4 ↓↓ otra estructa de descomposición 
var paquete = {
    numEnvio: 152487,
    dir: "calle rio plata",
    peso: "2kg"
}

var numEnvio, dir, peso;
({ numEnvio, dir, peso } = paquete);
console.log(numEnvio);

//EJEMPLO → Valor por defecto 
//_______________________↓↓
let persona2 = { nombreN2: "omar", edad: 20 }
    // ↑ objeto a descomponer ↑                   // ↓↓ Se debe relacionar el mismo objeto a descomponer
let { nombreN2, apellido: apellidoN3 = "Lopez" } = persona2
// ↑ en la descomposición tambien se agrega un valor por defecto ↑
//   pues apellido no es caracteristica inicial de persona2
console.log("El nombre es: " + nombreN2 + " " + apellidoN3);

//Descomposición en funciones *********************
//↓↓↓
var envio = {
    numEnvio: "325",
    producto: "videojuego"
}

datoEnvio(envio);
//↓Se pone en {} como en las otras descomposiciones
function datoEnvio({ numEnvio, producto }) { //Sí se pasan las caracteristicas de un objeto como parametro de una function 
    console.log("Número de envio: " + numEnvio); // .. se descompone pues se pueden usar como variables individuales
    console.log("Producto a enviar: " + producto);
}