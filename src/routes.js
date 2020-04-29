const express = require('express')
const UserController = require('./controllers/UserController')
const AlunosControlllers = require('./controllers/AlunosControllers')

const routes =  express.Router();

//Users
routes.get('/users', UserController.index)
routes.post('/register', UserController.store)
routes.delete('/users/:id', UserController.delete)

//Alunos
routes.get('/alunos', AlunosControlllers.index)
routes.post('/alunoscr', AlunosControlllers.store)



module.exports = routes