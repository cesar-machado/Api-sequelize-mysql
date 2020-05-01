const { Model, DataTypes } = require('sequelize')

class Inscricoes extends Model {
    static init(sequelize) {
        super.init({
            CursoId: DataTypes.INTEGER,
            AlunoId: DataTypes.INTEGER,
            fg_ativo: DataTypes.BOOLEAN
        },
            {
                sequelize,
            }
        )   
    }
}

module.exports = Inscricoes;