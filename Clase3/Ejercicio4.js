const fs = require('fs')

const package = fs.readFile('package.json', {encoding: 'utf-8'}, (err, data) => {
    if(err){
        throw new Error(err)
    }
    let info = {
        contenidoStr: data,
        contenidoObj: JSON.parse(data),
        // size: fs.stat VER!!!!
    }
    console.log(info)

    fs.writeFile('./info.txt', JSON.stringify(info, null, 2), {encoding:'utf-8'}, (err) => {
        if(err){
        throw 'Error al escribir el archivo'
    }
    })
})



//console.log(package)