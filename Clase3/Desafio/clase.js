import {readFile, writeFile, unlink} from 'fs'
//const fs = require('fs')

export default class Contenedor {
    constructor(archivo){
        this.archivo = archivo
    }

    save(obj) {
    readFile(this.archivo, {encoding: 'utf-8'}, (err, data) => {
        if(err){
            const producto = [{}]
            obj['id'] = 1
            producto.push(obj)
            writeFile(this.archivo, JSON.stringify(producto, null, 2), {encoding: 'utf-8'}, (err) => {if(err){throw err}})
        }else{
        const info = JSON.parse(data)
        const ids = info.map(prod => prod.id)
        const id = ids.sort((a,b)=> {return b - a})[0]
        obj['id'] = id + 1
        info.push(obj)
        console.log(id + 1)
        writeFile(this.archivo, JSON.stringify(info, null, 2), {encoding: 'utf-8'}, (err) => {
            if(err){
            throw `Error al escribir el archivo ${err}`
        }
    })}
    })    
}

    getById(id){
        readFile(this.archivo, {encoding: 'utf-8'}, (err, data) => {
            if(err){
                throw `Error ${err} al leer el archivo`
            }
            const info = JSON.parse(data)
            const test = info.find((el, index, array) => {
                if(el.id === id){
                    console.log(info[index])
                    return info[index]
                }else{console.log(null)}
    })  
})
}

    getAll(){
        readFile(this.archivo, {encoding: 'utf-8'}, (err, data) => {
            if(err){
                throw `Error ${err} al leer el archivo`
            }
            const info = JSON.parse(data)
            console.log(info)
    })  
    }

    deleteById(id) {
        readFile(this.archivo, {encoding: 'utf-8'}, (err, data) => {
            if(err){
                throw 'Error al leer el archivo'
            }
                
            const info = JSON.parse(data)
            const ids = info.map(prod => prod.id)
            info.find((el, index, array) => {
                if(el.id === id){
                    info.splice(index,1)
                    return info
                }
            })
            writeFile(this.archivo, JSON.stringify(info, null, 2), {encoding: 'utf-8'}, (err) => {
                if(err){
                throw `Error al escribir el archivo ${err}`
            }return `Objeto id=${id} eliminado`
        })
        })    
    }

    deleteAll() {
        unlink(this.archivo, (err)=>{
            if(err)
            {throw 'Error al borrar el archivo'
        }return 'Archivo borrado con exito'
    })
    }

}

