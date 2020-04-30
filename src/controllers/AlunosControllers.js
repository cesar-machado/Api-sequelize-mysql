const Alunos = require('../models/Alunos')


module.exports = {
    async index(req, res) {
        const alunos = await Alunos.findAll();

        return res.json(alunos);
    },
    async index(req, res) {
        const alunos = await Alunos.findByPk(req.params.id)

        return res.json(alunos);
    },
    async store(req, res, next) {
        try {
            const { name, email, celular, genero, rg, cpf, endereco, numero, complemento, bairro, cep, escolaridade,
                curso, obs } = req.body;

            //Create alunos
            const alunos = await Alunos.create({
                name,
                email,
                celular,
                genero,
                rg,
                cpf,
                endereco,
                numero,
                complemento,
                bairro,
                cep,
                escolaridade,
                curso,
                obs
            });

            return res.json(alunos)
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { name, email, celular, genero, rg, cpf, endereco, numero, complemento, bairro, cep, escolaridade,
                curso, obs } = req.body;
            const alunos = await Alunos.update({name, email, celular, genero, rg, cpf, endereco, numero, complemento, bairro, cep, escolaridade,
                curso, obs }, {
                where: {
                    id: req.params.id
                }
            })

            return res.json("Edição Completa")
        } catch (error) {
            next(error)
        }
    }



}
