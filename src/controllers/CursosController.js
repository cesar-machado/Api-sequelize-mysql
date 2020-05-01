const Cursos = require('../models/Cursos')
const Alunos = require('../models/Alunos')

module.exports = {
    async index(req, res) {
        const cursos = await Cursos.findAll();

        return res.json(cursos);
    },

    async store(req, res, next) {
        try {
            const { name } = req.body;


            //Create Cursos
            const cursos = await Cursos.create({ name });

            return res.json(cursos)
        } catch (error) {
            next(error)
        }
    },
    async inscricoes(req, res) {
        const { CursosId }  = req.params;
        
        const curso = await Cursos.findAll({
            include: { 
                association: 'alunos', 
                attributes: ['name'], 
                through: { 
                  attributes: ['createdAt']
                } 
            }
        });

        res.json(curso)
    },

    async store(req, res, next) {
        // const { alunoId } = req.params

        const { name } = req.body;

        const AlunoId = await Alunos.findByPk(req.params.id)

        if(!AlunoId) {
            return res.status(400).json({error: 'Aluno não encontrado' })
        }

        const [ cursos ] = await Cursos.findOrCreate({
            where: { name }
        })

        await AlunoId.addCursos(cursos);

        return res.json(cursos);
    },


}