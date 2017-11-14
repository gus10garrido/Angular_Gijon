interface Autor {
    nombre: string;
    apellido: string;
    algo(): void;
}

class Libro implements Autor{
    //public autor: Autor;
    public nombre;
    public apellido;

    public titulo: string;
    constructor (autor, titulo) {
        this.autor = autor;
        this.titulo = titulo;
    }

    algo() {}
}

class LibroTecnico extends Libro {
    private tema: string;
    constructor (autor, titulo, tema) {
        super(autor, titulo);
        this.tema = tema;
    }
    mostrar(){
        console.log(this);
    }
}

let objetoLibro = new LibroTecnico("Pepe","Angular para expertos", "Programación")
objetoLibro.editorial = "Anaya"
console.log(objetoLibro)