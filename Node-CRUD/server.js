const porta = 3000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extends: true}))

// Rotas

app.use('/api', require('./src/routes'))

app.listen(porta, () =>{
    console.log(`Serdior Online, na porta ${porta}!`)
})