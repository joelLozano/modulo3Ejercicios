let datos = []

fetch('./File.json')
    .then(response => response.json())
    .then(data => {
        datos = data
    })

function mostrarDatos() {
    // datos.personajesStarWars.forEach(personaje => {
    //     let etiquetaP = document.createElement("p")
    //     etiquetaP.textContent = personaje.nombre
    //     document.getElementById("results").append(etiquetaP)
    // });
    showDatos(datos.personajesStarWars)
}

function ordenarAlfabeticamente() {
    let arrayOrdenado= datos.personajesStarWars.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1
        }
        if (a.nombre < b.nombre) {
            return -1
        }
        return 0
    })

    showDatos(arrayOrdenado)
}

function showDatos(array) {
    document.getElementById("results").innerHTML = "" // limpia el contenido de la tabla
    array.forEach( (personaje, index) => {
        document.getElementById("results").innerHTML += `
        <tr>
            <th scope="row">${++index}</th>
            <td>${personaje.nombre}</td>
            <td>${personaje.edad}</td>
            <td>${personaje.genero}</td>
            <td><button class="btn btn-danger " onclick="eliminarPersonaje(${--index})">Eliminar</button></td>
        </tr>
    `
    });
}

function nuevoPersonaje() {
    let nombre = document.getElementById("nombre").value
    const nombreCapitalize = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    let edad = parseInt(document.getElementById("edad").value)
    let genero = document.getElementById("genero").value
    let especie = document.getElementById("especie").value

    let nuevoPersonaje = {
        nombre: nombreCapitalize,
        edad: edad,
        genero: genero,
        especie: especie
    }

    datos.personajesStarWars.push(nuevoPersonaje)
    showDatos(datos.personajesStarWars)
    ocultarFormulario()
}

function eliminarPersonaje(indice) {
    datos.personajesStarWars.splice(indice,1)
    showDatos(datos.personajesStarWars)
}

function mostrarFormulario() {
    document.getElementById("formPersonaje").style.display = "block"
}

function ocultarFormulario() {
    document.getElementById("formPersonaje").style.display = "none"
}

function buscarPersonaje() {
    let personajeAbuscar = document.getElementById("searchItem").value
    let datosFiltrados = datos.personajesStarWars.filter( personaje => personaje.nombre.includes(personajeAbuscar) )
    if (datosFiltrados.length == 0) {
        document.getElementById("showError").innerHTML = `
        <div class="alert alert-danger" role="alert">
        No se encontraron coincidencias
      </div>
        `
    } else {
        document.getElementById("showError").innerHTML = ""
        showDatos(datosFiltrados)
    }
    
}


const searchInput = document.getElementById("searchItem");
searchInput.addEventListener("input",  buscarPersonaje)