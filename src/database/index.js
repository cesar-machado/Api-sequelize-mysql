const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Alunos = require('../models/Alunos')
const Cursos = require('../models/Cursos')


const connection = new Sequelize(dbConfig)

User.init(connection);
Alunos.init(connection);
Cursos.init(connection);


Alunos.associate(connection.models);
Cursos.associate(connection.models);


module.exports = connection;
