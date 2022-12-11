const express = require('express')
const { addUser, getUsers, getUser } = require('../controllers/usersController')

const api = express.Router()

api.post('/users', addUser)
api.get('/users', getUsers)
api.post('/user', getUser)

module.exports = api