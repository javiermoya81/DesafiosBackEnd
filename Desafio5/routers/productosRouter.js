
const { json } = require('express')
const express = require('express')
const Contenedor = require('../Contenedor')

const productosContenedor = new Contenedor('./productos.json')

const productosRouter = express.Router()


// ruta que devuelve todos los productos
productosRouter.get('/list-productos',async(req,res)=>{
    const listaProductos = await productosContenedor.getAll()
    const tagline = 'Lista de Productos'
    res.render('pages/listaProductos', {listaProductos: listaProductos, tagline: tagline})
    
})

//ruta agrega un nuevo producto
productosRouter.post('/productos', async(req, res)=>{
    const nuevoProducto = req.body
    nuevoProducto.price = parseInt(nuevoProducto.price)
    await productosContenedor.save(nuevoProducto)
    res.redirect('/list-productos')
})

// ruta que devuelve un producto por id
// productosRouter.get('/:id',async(req,res)=>{
//     const idProducto = parseInt(req.params.id)
//     const producto = await productosContenedor.getById(idProducto)
//     res.json(producto)
// })

// //ruta actualiza un producto por id
// productosRouter.put('/:id',async(req,res)=>{

//     const idProducto = parseInt(req.params.id)
//     const producto = await productosContenedor.getById(idProducto)
//     const productoModificado = req.body

//     if(producto.title != productoModificado.title) producto.title = productoModificado.title
//     if(producto.price != productoModificado.price) producto.price = productoModificado.price

//     await productosContenedor.saveAll(idProducto, producto)

//     res.json(producto)
// })

// //ruta elimina un producto por id
// productosRouter.delete('/:id',async(req,res)=>{
//     const idProducto = parseInt(req.params.id) 
//     await productosContenedor.deleteById(idProducto)
//     res.send('Producto eliminado')
// })
module.exports=productosRouter