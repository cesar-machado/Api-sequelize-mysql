const { Model, DataTypes } = require('sequelize')

class Cursos extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        },
            {
                sequelize,
            }
        )
    }
}

module.exports = Cursos;