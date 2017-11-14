class Libro {
    constructor (autor, titulo) {
        this.autor = autor
        this.titulo = titulo
    }
}

class LibroTecnico extends Libro {
    constructor (autor, titulo, tema) {
        super(autor, titulo)
        this.tema = tema
    }
}

let objetoLibro = new LibroTecnico("Pepe","Angular para expertos", "Programación")
objetoLibro.editorial = "Anaya"
console.log(objetoLibro)