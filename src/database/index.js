const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Alunos = require('../models/Alunos')

const connection = new Sequelize(dbConfig)

User.init(connection);
Alunos.init(connection);

module.exports = connection;
