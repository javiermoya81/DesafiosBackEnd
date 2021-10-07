
const express = require('express')

const Contenedor = require('./Contenedor')

const server = express()
const contenedor = new Contenedor('./productos.json')
const port = 8080

server.listen(port, ()=>{
    console.log(`Servidor conectado al puerto ${port}`)
})
server.on("error",error=>console.log(`Se produjo error de servidor ${error}`))

//Endpoints
// '/'
server.get('/',(req,res)=>{
    res.send('Servidor con express')
})

'/productos'
server.get('/productos', async(req,res)=>{
    const listaProductos = await contenedor.getAll()
    res.json(listaProductos)
})

// '/productoRandom'
server.get('/productoRandom',async(req,res)=>{

    const listaProductos = await contenedor.getAll()
    const idRandom = Math.round((Math.random()*(listaProductos.length-1))+1);
    const productoRandom = await contenedor.getById(idRandom)
    res.json(productoRandom)
})

