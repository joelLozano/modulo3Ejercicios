// Requiero un programa que determine si una persona es apta para obtener su licencia 
//de manejo  
/* 
    Si la persona es mayor igual a 18 podra realizar un examen 
    si pasa examen con almenos 6 podra ser acredpr a su licencia-
    
    Si tiene entre 15 y 17, años podrá tramitar un permiso temporal, aprobando 
    un examen teorico. con 6

    de lo contrario no se podra obtener la licenca ni permiso. 
*/

// Paso 1.- 
/*
    Trmaite de licencia:
        Entrada: 
            Solicitar Datos: El nombre, edad, calificacion.
        Proceso: 
            
            Si edad >= 18 
                entonces mostrar : "Puedes hacer el examen"
            si no (||)  evaluar edad >= 15 && edad <= 17  
                entonces  mostrar : "Puedes presentar tu examen para tu permiso temporal"
            si no, mostrar : " no puedes hacer este tramite"

            si calificacion >= 6 
                mostrar : "Feliciades 'nombre' , aqui tienes tu licencia"
            de lo contrario: 
                mostrar "Sorry , estudia mas"
        fin de Proceso 

    Fin de programa
    */

function solicitarDatos() {
    // pedir datos prompt - input ... 
    let nombre = document.getElementById("nombre").value
    let edad = parseInt(document.getElementById("edad").value)
    let calificacion = parseFloat(document.getElementById("calificacion").value)

    validacionEdad(edad, nombre, calificacion)
}

function validacionEdad(edad, nombre, calificacion) {
    if (edad >= 18 || (edad >= 15 && edad <= 17)) {
        alert("Puedes hacer el examen")
        validacionCalificacion(nombre, calificacion)
    } else {
        alert(" no puedes hacer este tramite")
    }
}

function validacionCalificacion(nombre, calificacion) {
    if (calificacion >= 6 ) {
        alert("Feliciades" + nombre + ", aqui tienes tu licencia")
    } else {
        alert("Sorry , estudia mas")
    }
}









// if (edad >= 18 ) {
//     alert("Puedes hacer el examen")
// } else if (edad >= 15 && edad <= 17) {
//     alert("Puedes presentar tu examen para tu permiso temporal")
// } else {
//     alert("no puedes hacer este tramite")
// }