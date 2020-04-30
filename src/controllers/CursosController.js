const Cursos = require('../models/Cursos')

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
    }

}