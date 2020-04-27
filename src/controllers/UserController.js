const User = require('../models/User')
const bcrypt = require('bcryptjs')


module.exports = {
    async index(req,res) {
        const users = await User.findAll();

        return res.json(users);
    },
    
    async store(req, res) {
        const{name, password} = req.body;

        //hash
         const salt = await bcrypt.genSalt(10);
         const hashPassword = await bcrypt.hash(req.body.password, salt);

        //Create User
         const user = await User.create({ name, password: hashPassword});
        return res.json(user)
    },

    async delete(req, res) {
        const user = await User.findByPk(req.params.id)
            .then((user) => {
                return user.destroy();
            })


        return res.json(user)
    }
    
    

}