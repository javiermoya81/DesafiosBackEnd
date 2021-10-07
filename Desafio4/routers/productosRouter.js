
const express = require('express')
const Contenedor = require('../Contenedor')

const productosContenedor = new Contenedor('./productos.json')

const productosRouter = express.Router()


// ruta que devuelve todos los productos
productosRouter.get('/',async(req,res)=>{
    const listaProductos = await productosContenedor.getAll()
    res.json(listaProductos)
})

// ruta que devuelve un producto random por id
productosRouter.get('/:id',async(req,res)=>{
    const listaProductos = await productosContenedor.getAll()
    const idRandom = Math.round((Math.random()*(listaProductos.length-1))+1);
    const productoRandom = await productosContenedor.getById(idRandom)
    res.json(productoRandom)
})

//ruta agrega un nuevo producto
productosRouter.post('/', async(req, res)=>{
    const nuevoProducto = req.body
    //console.log(nuevoProducto)
    const idProductoNuevo = await productosContenedor.save(nuevoProducto)

    res.send({
        mensaje: ' producto nuevo agregado',
        producto:{
            ...nuevoProducto
        }
    })
})

//ruta elimina un producto por id
productosRouter.delete('/:id',async(req,res)=>{
    const idProducto = req.body
    const idProductoEliminado = idProducto.id
    await productosContenedor.deleteById(idProductoEliminado)
})
module.exports=productosRouter