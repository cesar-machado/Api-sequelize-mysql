const { Model, DataTypes } = require('sequelize')

class Cursos extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        },
            {
                sequelize,
                tableName: 'Cursos'
            }
        )
    }

    static associate(models) {
        this.belongsToMany(models.Alunos, { foreignKey: 'CursosId',through: 'Inscricoes', as : 'alunos'})
    }
}

module.exports = Cursos;