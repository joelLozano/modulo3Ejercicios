class Cine {
    constructor(video) {
        this.video = video
    }

    reproducir() {
        console.log("play... ", this.video);
    }
}

class Documental extends Cine {
    constructor(video, duracion) {
        super(video)
        this.duracion = duracion
    }

    // sobre escritura de metodos - override 
    reproducir(){
        console.log("playX2 =  ", this.video)
    }
}

class Pelicula extends Cine {
    constructor(video, genero) {
        super(video)
        this.genero = genero
    }

}

const planetaTierra = new Documental("planetaTierra.mov" , "1:25:10")
planetaTierra.reproducir()