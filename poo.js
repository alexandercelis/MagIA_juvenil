//OOP   
// Objetos
var celphone = {
        color: "black",
        peso: "75g",
        ram: "4gb",
        rom: "125gb",
        procesador: "snapDragon 252",
        bateria: "5000ma",
        camFront: "16mpx",
        camBack: "45mpx"
    }
    //console.log(celphone.color);
    //
var celularRojo = {
    color: "rojo",
    peso: "50gr",
    nomCamaras: 4,
    sistema: "android 10",
    prender: function() { return "Prendiendo.." },
    //reiniciar: fucntion() { return "Reinciando.." }
}

//console.log(celularRojo.prender() + celularRojo.sistema);
//class → permite crear una plantilla para la creación de objetos.
class galleta {
    constructor(tamaño, forma, sabor) {
        this.tamaño = tamaño;
        this.forma = forma;
        this.sabor = sabor;
        this.hornea = function() { return "horneando.." }
    }
}

// Para crear un objeto desde una plantilla class ↓↓
var galletaVainilla = new galleta("3 cm", "Circulo", "Vainilla");
// console.log(galletaVainilla.hornea()); 
//-----------------------------------

// ↓↓↓ ¿Como comparar objetos? ↓↓↓↓
var fruta1 = { name: "manzana", color: "red" }
var fruta2 = { name: "manzana" }

//caso 1 ↓
var resultado = (fruta1 === fruta2);
console.log(resultado); // Retorna FALSE porque los dos objetos no son los mismos

// caso 2 ↓
//var fruta3 = fruta1;
var resultado2 = (fruta1 == fruta3);
console.log(resultado2); // Retorna TRUE pues al asignarle a un objeto el valor ..
//..del otro los dos tiene el mismo contenido.

//caso 3 ↓
var fruta3 = { name: "manzana" }
var resultado3 = (fruta1 = fruta3); // ← Retorna el contenido en el que coinciden
console.log(resultado3);