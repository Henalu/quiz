const express = require('express')
const { addUser, getUser } = require('../controllers/usersController')

const api = express.Router()

api.post('/users', addUser)
api.post('/user', getUser)

module.exports = api