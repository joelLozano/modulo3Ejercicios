let datos = []

fetch('./File.json')
    .then(response => response.json())
    .then(data => {
        var personajes = data.personajesStarWars.concat()
        console.log(personajes)
        datos = personajes
    })

    function mostrarDatos(){
        console.log(datos)
    }

