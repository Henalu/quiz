const User = require('../models/Users')

// Guardar un nuevo usuario (para el registro)
async function addUser(req, res) {
    try {
        const {
            name,
            surname,
            email,
            password
        } = req.body

        const user = User({
            name,
            surname,
            email,
            password
        })

        const usersRegistered = await user.save()

        res.status(201).send({ usersRegistered })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

// Buscar un Usuario (para el login)
async function getUser(req, res) {
    try {
        const {
            email,
            password
        } = req.body

        const usersRegistered = await User.findOne({ email: email, password: password })
        res.status(201).send({ usersRegistered })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

module.exports = {
    addUser,
    getUser
}