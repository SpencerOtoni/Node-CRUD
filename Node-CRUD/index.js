const porta = 3000
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const Bd = require('./BD')

server.use(bodyParser.urlencoded({extends: true}))

server.get('/geeks', (req,res) =>{
     const usuarios = Bd.getUsuarios()
     res.send(usuarios)
})

server.get('/geeks/:nome', (req,res) =>{
    const usuario = Bd.getUsario(req.params.nome)
    res.send(usuario)
})

server.post('/geeks', (req, res) =>{
    const usuario = Bd.salvarUser({
        nome: req.body.nome,
        idade: req.body.idade,
        sexo: req.body.sexo
    })
    res.send(usuario)
})

server.delete('/geeks/:nome', (req, res) =>{
    const usuario = Bd.deleteUsuario(req.params.nome)
    res.send(usuario)
})

server.listen(porta, () =>{
    console.log(`Serdior Online, na porta ${porta}!`)
})