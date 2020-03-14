const express = require('express')
const routes = express.Router()

const controllers = require('./controller/controllers')

routes.get('/geeks', controllers.getUsers)

routes.get('/geeks/:nome', controllers.getUser)

routes.post('/geeks', controllers.saveUser)

routes.delete('/geeks/:nome', controllers.deleteUser)

routes.put('/geeks/:nome', controllers.updateUser)

module.exports = routes