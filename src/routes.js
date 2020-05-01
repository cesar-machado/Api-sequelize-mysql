const express = require('express')
const UserController = require('./controllers/UserController')
const AlunosControlllers = require('./controllers/AlunosControllers')
const CursosController = require('./controllers/CursosController')


const routes =  express.Router();

//Users
routes.get('/users', UserController.index)
routes.post('/register', UserController.store)
routes.delete('/users/:id', UserController.delete)

//Alunos
routes.get('/alunos', AlunosControlllers.index)
routes.get('/alunos/:id', AlunosControlllers.index)
routes.post('/alunoscr', AlunosControlllers.store)
routes.put('/alunos/editar/:id', AlunosControlllers.update)

//Cursos
routes.get('/cursos', CursosController.index)
routes.post('/crcursos', CursosController.store)

//inscrições
routes.get('/inscricoes', CursosController.inscricoes)
routes.post('/aluno/:id/cursos', CursosController.store)


module.exports = routes