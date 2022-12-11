const User = require('../models/Users')

// Guardar un nuevo usuario
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

// Buscar un Usuario
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

// Buscar todos los usuarios
async function getUsers(req, res) {
    // Lean convierte a objetos planos de js, Exec indica que ejecute la consulta y retorna la promesa
    const users = await User.find().lean().exec()
    res.status(200).send({ users })
}

module.exports = {
    addUser,
    getUsers,
    getUser
}