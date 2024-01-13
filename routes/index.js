const routes = require('express').Router()
const myController = require('../controllers/professional')

routes.get("/professional", myController.professionalRoute);

module.exports = routes