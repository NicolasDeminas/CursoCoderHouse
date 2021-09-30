class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }

    getFullName() {
        return console.log(`${this.nombre} ${this.apellido}`)
    }

    addMascota(name) {
        this.mascotas.push(name)
    }

    countMascotas() {
        return console.log(this.mascotas.length)
    }

    addBook(name, author) {
        const libro = {Nombre: name, Autor: author}
        this.libros.push(libro)
    }

    getBookNames() {
        return console.log(this.libros.map(n => n.Nombre))
    }

}

const usuario = new Usuario("Nicolas", "Deminas")
usuario.getFullName()
usuario.addMascota("Perro")
usuario.addMascota("Gato")
usuario.countMascotas()
usuario.addBook('El señor de las moscas', 'William Golding')
usuario.addBook('Fundacion', 'Isaac Asimov')
usuario.getBookNames()