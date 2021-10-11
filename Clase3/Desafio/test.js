import Contenedor from './clase.js'

const productos = 
    {
        title: 'Vino',
        price: 250,
        thumbnail: 'https://pbs.twimg.com/media/E2LEhhgWUAEQtlk?format=jpg&name=medium'
    }

const contenedor = new Contenedor('productos.txt')

contenedor.save(productos)
//contenedor.getById(4)
//contenedor.getAll()
//contenedor.deleteById(2)
//contenedor.deleteAll()
