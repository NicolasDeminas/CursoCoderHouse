const fs = require('fs')


let fechaHora = new Date()


try{
    fs.writeFileSync('fyh.txt', JSON.stringify(fechaHora), {encoding: 'utf-8'})
}catch(err){
    throw new Error("Error al crear el mensaje")
}

try{
const archivoFyH = fs.readFileSync('fyh.txt', {encoding: 'utf-8'})
console.log(archivoFyH)
}catch(err){
    throw new Error("Error al leer el mensaje")
}