// Crear Galeria de fotos 

// 1.- Crear una clase 

class Imagen {
    constructor(titulo, tamaño, fecha, resolucion, formato) {
        this.titulo = titulo
        this.tamaño = tamaño
        this.fecha = fecha
        this.resolucion = resolucion
        this.formato = formato
    }

    getTitulo() {
        return `La imagen se llama ${this.titulo}`
    }
}
// 2.- Crear el objeto con el comando new 

const img1 = new Imagen("Fondo de Windows", "1200X900", "12-04-09", "4K", "PNG")
const img2 = new Imagen("ON", "1200X900", "12-04-09", "4K", "JPG")
const img3 = new Imagen("Gatito", "1200X900", "12-04-09", "4K", "GIF")

let galeria = [img1, img2, img3 ]

for(let i =0 ; i < galeria.length; i++) {
    console.log(galeria[i].titulo)
}

galeria.forEach(x => {
    console.log(x.titulo)
});

function sumar() {
    return 1 + 1
}


const addd = function () {
    return 1+1 
}

const adddd = () => {
    return 1+1 
}
