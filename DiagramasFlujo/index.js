/*

Crear un programa que imprim los  primeros 100 números pares. 

0 2 4 6 8 10 .... 100

Para determinar un numero par 

% - Residuo   10 % 2 = 5 -> 0 ( par )
            7 % 2 = 3 -> 1  (impar) 

*/ 

for (let i =0 ; i <=100; i++) {
    if (i % 2 == 0 ) {
        console.log("Numero par "+ i );
    }
}

for (let i =0 ; i <=100; i += 2) {
    console.log("Numero par "+ i )
}



var persona =  {
    nombre: "joel",
    edad: 15,
    email: "lozano@gmail.com"
}

console.log(persona.nombre)



