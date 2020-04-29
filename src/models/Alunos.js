const { Model, DataTypes } = require('sequelize')

class Alunos extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            celular: DataTypes.STRING,
            genero: DataTypes.STRING,
            rg: DataTypes.STRING,
            cpf: DataTypes.STRING,
            endereco: DataTypes.STRING,
            numero: DataTypes.STRING,
            complemento: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cep: DataTypes.STRING,
            escolaridade: DataTypes.STRING,
            curso: DataTypes.STRING,

        },
            {
                sequelize,
            }
        )
    }
}

module.exports = Alunos;