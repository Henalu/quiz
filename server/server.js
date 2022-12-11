//! Este es el archivo que se encarga de inicializar el servidor
require('dotenv').config()
// Ahora ya no requerimos express, sino que lo llamammos desde la app.js
const app = require('./app')
const connectDb = require('./db/mongodb')
const { appConfig, dbConfig } = require('./config')

async function initApp(appConfig, dbConfig) {
    try{
        await connectDb(dbConfig)
        app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`))
    }catch(e){
        console.error(e)
        process.exit(0)
    }
}

initApp(appConfig, dbConfig)