/* 
POO  -> Clases.

Una clase para crear pasteles.
- Receta / Ingredientes 

    - Leche
    - Harina 
    - Huevos 
    - Mantequilla
    - Levadura
    - azucar
    - Sabor
*/

// Definicion de una clase - Debe empezar con mayuscula

class Pastel {
    
    constructor(leche, harina, huevos, mantequilla, levadura, sabor) {
        this.lecheV2 = leche
        this.harina = harina
        this.huevos = huevos
        this.mantequilla = mantequilla
        this.levadura = levadura
        this.sabor = sabor
    }

    figuraMicky() {
        console.log("Pastel del famoso Micky sabor " + this.sabor)
    }

    figuraSpiderman() {
        console.log("rico pastel de El asombroso hombre Araña")
    }
}

const pastelChocolate = new Pastel("Alpura", "Trigo", 1, true, "500gr", "chocolate" )



pastelChocolate.figuraMicky()
