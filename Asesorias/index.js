/* 

     ciclos  ->
        for -> tener el control del paso a paso de cada iteracion
        foreach -> PEsando para los arreglos 
        while -> Ejecuta N cantidad de veces, siempre y cuando se cumpla la condicion inicial 
        do while -> Ejecuta N cantidad de veces, ejecutanto siempre por lo menos una vez el codigo. 
        for in -> Version mejorada del for, para recorrer arreglos y objetos
     
        funciones 
            Sus diferentes formas de declararlas
            Tenemos que entender bien la forma de trabajar de return. 
     
    condicionales: 
        if -> Siempre y cuando se cumpla la condicion, se ejecuta el codigo
        if else -> Siempre y cuando se cumpla la condicion, se ejecuta el codigo, de lo contrario se ejecuta el else
        if else if -> Siempre y cuando se cumpla la condicion, se ejecuta el codigo, de lo contrario se ejecuta el else if
        switch-
        operador ternario ->
*/

// archivos JSON -> Javascript Object Notation

const auto = {
  marca: "MErcedes Benz",
  modelo: 2020,
  deportivo: true,
  dueños: [
    {
      nombre: "Juan",
      direccion: "Calle 123",
    },
    {
      nombre: "Pedro",
      direccion: "Calle 123",
    },
    {
      nombre: "Maria",
      direccion: "Calle 123",
    },
  ],
};

// for (let i=0; i < auto.dueños.length; i++) {
//     console.log(i);
//     if (auto.dueños[i].nombre === "Maria") {
//         console.log("Encontramos a Maria");
//     }
// }

// let persona = auto.dueños.find((element) => element.nombre === "Maria");
// (persona == undefined) ? console.log("no encontre nada") : console.log(persona);

// auto.dueños.forEach( item => {
//     console.log(item.nombre);
// })

let i = 0;

// while (i < auto.dueños.length) { 
//     console.log(auto.dueños[i].nombre);
//     i++;
// }

// do {
//     console.log(auto.dueños[i].nombre);
//     i++;
// } while (i < auto.dueños.length);


let usuario = {
    nombre: "Juan",
    password: "123ABC"
}

let userLogeado = false;

while (!userLogeado) {
    if (usuario.password === "123ABC") {
        console.log("Bienvenido");
        userLogeado = true;
    } else {
        console.log("Contraseña incorrecta");
    }
}