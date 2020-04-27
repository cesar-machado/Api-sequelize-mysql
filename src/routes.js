const express = require('express')
const UserController = require('./controllers/UserController')

const routes =  express.Router();

routes.get('/users', UserController.index)
routes.post('/register', UserController.store)
routes.delete('/users/:id', UserController.delete)



module.exports = routes