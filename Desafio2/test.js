
const Contenedor = require('./Contenedor.js')



const nuevoProducto = { title:'mouse', price: 200, id:""}

const ContenedorProductos = new Contenedor('./productos.json')

async function llamadoFunciones() {

    await ContenedorProductos.save(nuevoProducto)//Guarda nuevoProducto en .json y devuelve id por consola
    await ContenedorProductos.getAll()//muestra por consola todos los productos del archivo .json
    await ContenedorProductos.getById(2)//busca y muestra por consola el producto con id pasado como parametro
    await ContenedorProductos.deleteById(2)//busca y borra el producto con id pasado como parametro
    await ContenedorProductos.deleteAll()//borra todos los productos del archivo .json
}

llamadoFunciones()
