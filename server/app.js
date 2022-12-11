//! Este archivo es responsable de configurar todo lo relacionado a express
const express = require('express')
const cors = require ('cors')

// Rutas
const userRoutes = require('./routes/routes')
const app = express()

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

// Version 1: v1
app.use('/v1', userRoutes)

module.exports = app