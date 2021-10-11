const fs = require("fs")

// Leer archivos
let readFileOne = fs.readFileSync('./test.txt', {encoding: 'utf-8'})

console.log(readFileOne)

// Escribir
fs.writeFileSync('./test.txt', "Contenido nuevo", {encoding: 'utf-8'})

// Añadir
fs.appendFileSync('./test.txt', '\nContenido adicional', {encoding: 'utf-8'})

// Eliminar
fs.unlinkSync('./test.txt')
