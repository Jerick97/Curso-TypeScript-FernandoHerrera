// Comando para compilar el archivo .ts ----> tsc app.ts
// Comando para agregar el modo observador ----> tsc app.ts --watch o --w
// Comando para cancelar el watch ----> ctrl + c
// Comando para inicializar el proyecto de ts ----> tsc -init
// Comando para observar todos los archivos ts del proyecto luego del tsconfig.json ----> tsc -p ./ -w o solo tsc -w
console.log("Hello World!!!");


// Tipos de Datos

/**
 * a.Primitivos =>  - STRING ("" '' ``)
 *                  - NUMEROS (3.1415 1500.0 1)
 *                  - BOOLEANOS (TRUE FALSE)
 *                  - NULL / UNDEFINED (null undefined)
 *                  - Array ([1, 2, 3])
 * 
 * b. Compuestos => - Objetos Literales ({nombre: "Jerick97"})
 *                  - Clases ( class Persona {nombre, edad} )
 *                  - Funciones ( function saludar(){return 'Hola';})
 */

// Tipos Nuevos

/**
 *  1.Interfaces
 *  2.Tipos Genericos
 *  3.Tipos Nuevos
 */

// Tipo de dato  -  Boolean

let esSuperman:boolean = true;
let esBatman:boolean;
let esAcuaman: true; //No es recomendable

console.log(salvados(esSuperman));

esSuperman = convertirClark();

console.log(salvados(esSuperman));

function salvados(heroe:boolean){
    return heroe ? "Estamos salvados!!" : "Ooops! ohh"
}

function convertirClark(){
    return false;
}


// Tipo de dato  -  Numbers

let avengers:number = 5;
let villanos:number; //undefined
let otros = 2;

villanos = 3;

if(avengers > villanos){
    console.log("Estamos salvados!")
}else{
    console.log("Estamos muertos!")
}

otros = 123;
otros = 123.12;
//otros = "123"; nos devuelve un error

// Tipo de dato  -  String

let batman:string = "Batman";
let linternaVerde:string = 'Linterna Verde';
let volcanNegro:string = `Volcan Negro`;

console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);

let concatenar = `Los héroes son: ${batman}, ${linternaVerde} y ${volcanNegro}`;

console.log(concatenar);