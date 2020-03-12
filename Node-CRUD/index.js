const porta = 3000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Bd = require('./BD')

app.use(bodyParser.urlencoded({extends: true}))

app.get('/geeks', (req,res) =>{
     const usuarios = Bd.getUsers()
     res.send(usuarios)
})

app.get('/geeks/:nome', (req,res) =>{
    const usuario = Bd.getUser(req.params.nome)
    res.send(usuario)
})

app.post('/geeks', (req, res) =>{
    const usuario = Bd.saveUser({
        nome: req.body.nome,
        idade: req.body.idade,
        sexo: req.body.sexo
    })
    res.send(usuario)
})

app.delete('/geeks/:nome', (req, res) =>{
    const usuario = Bd.deleteUser(req.params.nome)
    res.send(usuario)
})

app.put('/geeks/:nome', (req, res) =>{
    const usuario =  Bd.updateUser(req.params.nome,{
        nome: req.body.nome,
        idade: req.body.idade,
        sexo: req.body.sexo
    })
    res.send(usuario)
})

app.listen(porta, () =>{
    console.log(`Serdior Online, na porta ${porta}!`)
})