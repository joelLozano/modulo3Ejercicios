//let frutas = ["manzana", "pera", "melon", "fresa" ]

/* 
    Para recorrer un arreglo podemos usar un ciclo for / foreach
*/

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]); // imprime  "manzana", "pera", "melon", "fresa"
// }

// matrices o arreglos multidimensionales, esto aplica cuando tengoo un arreglo dentro de otro arreglo
//console.log(frutas[7][0]);

let objeto= {
    pais: [{
        nombre: "mexico",
        estados: ["cdmx", "edomex", "guanajuato"]
    }]
}

//console.log(objeto.pais[0].estados[2]);

// let frutas = ["manzana", "pera", "melon", "fresa" ]

// frutas.push("naranja"); // agrega un elemento al final del arreglo
// console.log(frutas);

// frutas.pop(); // elimina el ultimo elemento del arreglo
// frutas.pop();
// console.log(frutas);

// frutas.unshift("naranja"); // agrega un elemento al inicio del arreglo
// console.log(frutas);
// frutas.shift(); // elimina el primer elemento del arreglo
// console.log(frutas);


// let datos = "-descarga el qr - ve al axxo y paga -pide tu recibo -sube tu comprobante"
// let arregloDatos = datos.split("-"); // convierte un string en un arreglo 
// console.log(arregloDatos);
// arregloDatos.shift();  // elimna el primer elemento del arreglo
// console.log(arregloDatos);


//let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(numeros);

//let numeros2mitad = numeros.slice(4) // parte el array desde la posicion 4 o el numero que le indiquemos
//console.log(numeros2mitad);

// puedo indicar rangos 
//let numerosRango = numeros.slice(1,8) // parte el array desde la posicion 1 hasta la posicion 8 sin incluir la posicion 8
//console.log(numerosRango);

let letras = ["a", "d", "e", "f", "g", "h", "i"];
// letras.splice(1,0, "b", "c"); // agrega elementos en la posicion 1, no elimina ningun elemento
// console.log(letras);

// let elementoBorrado = letras.splice(4,2,"x","y");
// console.log(letras);
// console.log(elementoBorrado);


let numeros = [10, 21, 23, 4, 5, 67, 1, 2, 3];

//console.log(numeros.sort()); // ordena el arreglo de forma ascendente

let ordenados = numeros.sort((a,b) => a-b); // ordena el arreglo de forma ascendente
console.log(ordenados);

let array1 = [1, 4, 3];
let array2 = [ 5,[9,5,3], 10]
console.log(array2.flat());

// let array3 = array1.concat(array2); // concatena dos arreglos
// console.log(array3);

// array3.sort((a,b) => a-b);

// console.log(array3);
