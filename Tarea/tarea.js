/*
    Escribe los pasos necesarios que se realizan para arrancar un auto. 
    Ejemplo : 
    1.- Abrir la puerta 
    2.- Sentarme 
    3.- Meter llave, o presionar freno o clush y presionar boton (depende del carro)
    4.- ... etc. 
*/

/* 
    con base al ejercicio anterior crea su pseudocodigo. 
    donde valides si es un auto con encendido de boton o llave  ( if autoamtico )
*/

/*
    crea una tarea que se repita 10 veces, donde imprimas tu nombre
    nota: Recuerda que un ciclo for necesita tres cosas para funcionar 
    1.- un INICIALIZADOR 
    2.- Un limite 
    3.- Incremento 

*/

/* 
    ¿Recuerdas para que son los operadores logicos ? 
    Un operador logico se representan por lo siguiente 
    > Mayor que 
    < Menor que 
    != Distinto o diferente a .. 
    >= Mayor o igual 
    <= Menor o igual
    == es igual a 
    && AND , es un operador para evaluar dos condiciones, este regresa true en caso 
    de que las dos comparaciones sean true
    
    Ejemplo: ¿Tienes mas de 18 años o tienes INE (cedula) ?, entonces puedes tramitar 
    tu licencia

    ¿como se ve en codigo ? 

    if (edad >= 18 && INE == true) {
        console.log("PUEDES TRMAITAR LICENCIA")
    }


    || OR , es un operador que regresa true, en caso de que alguna de las condiciones 
    sea verdadera, Ejemplo: ¿te gusta la pizza o te gusta el hotDog ?  entonces te gusta 
    la comida chatarra..... 

    Explicacion: cualquier opcion si es verdadera aun asi te gusta la comida chatarra
                puede ser un valor o el otro- 



    Teniendo eso en mente pon el resultado de las siguientes operaciones:

    Ejemplo : 12 > 0  = true 

    15 == 25  =
    30/2 == 15 = 
    2* 5 + 20 >= 50 = 
    12 != 12 =
    12 == 12  = 
    (23 + 22 ) * 2 >= (22 + 3 + 30 - 5 ) = 
    (23 + 22 ) * 2 >= (22 + 3 + 30 - 5 ) && (45>= 40 - 3 + (-2)) =
    true && true = 
    true || false && true && true = 
*/

/* 
    ¿Para que me sirve un arreglo ? 

    Investiga los siguientes metodos de un arreglo  y da un pequeño ejemplo 

    1.- pop
    2.- push 
    3.- length 
    4.- forEach

*/

/*
    Con base a tu investigacion.
    supon que tienes un arreglo de frutas
    let frutas = ["manzana", "pera", "melon", "fresa"] 
    
    1.- escribe el codigo para agregar "naranja" y "sandia"

    2.- elimina el ultimo elemento

    3.- Imprime el numero de elementos que tiene despues de elimnar sandia

    4.- recorrec todo tu array de frutas

*/

/* 

Recuerdas la evoluciones de las funciones ? 
existe una funcion que se llama "arrow function" o funcion tipo flecha

estas pueden pasarse por parametro dentro de otra funcion, ejemplo 
    funcion suma(a,b) {
        return a + b 
    }


    function calcular () {

    }

    si quiiero decir a mi funcion calcular que tiene como parametro una funcion suma 
    se escribiria asi :

    function calcular ( suma ) { .. }

    pero en vez de tener suma definida por fuera 
    puedo escribirla dentro de la misma funcion calcular 

    function calcular( (a, b ) = > return a + b )
    ** nota que lo que esta dentro de calcular es la mima funcion de sumar
    pero escrita como si fuera un arrow function. 
    la unica diferencia es que se omiten los {} , esto es permitido unicamente si tengo 
    una linea de codigo, si teiens mas ligica , debes ponerlos. 

    ejemplo : 
    function calcular( (a, b ) = > {
        let resultado = a + b
        console.log(resultado) 
    } )

    Referencia : 

    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions


*/


/* 
    Crea una clase de tipo Computadora, con las siguientes 
    propiedadas 

    - Marca
    - capacidad en Memoria Ram
    - capacidad disco duro 

    agrega dos métodos que mande un mensaje en consola para
    - preder 
    - apagar 
*/


/*
    Corrige el sigueinte codigo

    # 1 
    
    if edad > 18 [
        console.log(Eres mayor de edad )
    ]


    #2 - Debe imprimir del 1 al 10 

    for (let i=1 <10, 1++) {
        console.log(i)
    }

    #3 Imprime unicamente los numeros pares ( 0 2, 4, 6 ...20)

    let pares = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    for (let i= 1, i<= pares, i ++) {
        console.lo("es un numero par ")
    }

*/