const fs = require('fs')

let readF = fs.readFile('./test2.txt', {encoding: 'utf-8'}, (err, data) => {
    if(err){
        throw 'Error al leer'
    }
    console.log(data)
})

fs.writeFile('./test2.txt', 'Contenido del archivo', {encoding: 'utf-8'}, (err) => {
    if(err){
        throw 'Error al escribir'
    }
})