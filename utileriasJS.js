// Math.random() → devuelve un # aleatorio entre 0 y 1 || * 10 para llevar el rango de 0 a 10
console.log(Math.round(Math.random() * 10));
//Math.round() → redondea el decimal de random.

//Creamos una función flecha que sera útil para utilizarla varias veces 
exports.numRandom = () => { // extorts.nameFuncion permite a todos los archivos del mismo folder requerir la utileria
    return resultado = Math.round(Math.random() * 10);
}

// nameString.length → cantidad de caracteres de un string
// nameString.indexOf(texto) → muestra el index de la primera aparaición en la cadena,si no esta retorna 0

var texto = "hola como estas?";

console.log(texto.length);
console.log(texto.indexOf("e"));
console.log(texto.indexOf("x"));
console.log(texto.indexOf("a"));

//nameString.replace(valorSustituir, valorNuevo); → Reemplaza un valor por otro en un String
// name String.slice(indexInit, IndexEnd); → Extrae parte de un string y lo retorna como un nuevo string

console.log(texto.replace("hola", "HELLO"));

var nombre = texto.slice(0, 4);
console.log(nombre);