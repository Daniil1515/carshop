const express = require('express')
const catalog = require('./catalog')
const cors = require('cors')



const server = express()
server.use(cors())

server.get('/catalog',(request, response) =>{
    response.json(catalog)
})

server.get('/catalog/:id',(request, response) =>{
    const {id} =request.params
    const product = catalog.find(el => el.id === +id)
    response.json(product)
})

server.listen(8000,() => {
    console.log('Server is running')
})
