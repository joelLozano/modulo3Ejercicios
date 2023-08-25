class Alumno {
    constructor(nombre, edad, matricula) {
        this.nombre = nombre;
        this.edad = edad;
        this.matricula = matricula
    }

    obtenerNombre() {
        return this.nombre;
    }
}

class Grupo {
    constructor(nombre, alumnos, materias) {
        this.nombre = nombre;
        this.alumnos = alumnos;
        this.materias = materias;
    }
}

// crear objeto tipo Alumno 
let alumno1 = new Alumno("Juan", 20, "123456");
let alumno2 = new Alumno("Maria", 21, "123457");
let alumno3 = new Alumno("Alberto", 22, "123458");

// Creo un arreglo de alumnos
let alumnos = [alumno1, alumno2, alumno3];

// crear objeto tipo Grupo donde le paso el arreglo de alumnos
let grupo1 = new Grupo("1A", alumnos, ["matematicas", "español", "historia"]);
//let grupo2 = new Grupo("2B", alumnos, ["Historia", "Ciencias Naturales", "historia"]);


function inscribirAlumno(grupo) {
    // obtener datos del alumno u crear un objeto de tipo Alumno
    // para obtener los datos de un alumno lo podemos hacer mediante el html.
    // OJO: es ejemplo, esto dara un error porque no encuentra el html
    
    let newAlumno = new Alumno();
    newAlumno.nombre = document.getElementById("nombre").value;
    newAlumno.edad = document.getElementById("edad").value;
    newAlumno.matricula = document.getElementById("matricula").value;
    
    // para probar , comenta el codigo anterior linea 39 a 42 y descomenta la linea 45
    //let newAlumno = new Alumno("Luis", 29, "15558");

    // uma vez que tengo el nuevo alunmo lo agrego al grupo
    grupo.alumnos.push(newAlumno);

    console.log(grupo);

}

inscribirAlumno(grupo1);
