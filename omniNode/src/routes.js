const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const AuthOngs = require('./middlewares/authOngs');
const AuthProfile = require('./middlewares/authProfile');
const AuthDeleteIncidents = require('./middlewares/authDeleteIncidents');
const AuthPage = require('./middlewares/authPage');
const AuthCreateIncidents = require('./middlewares/authCreateIncidents');
const AuthLogin = require('./middlewares/authLogin');

const routes = express.Router();

routes.post('/sessions',AuthLogin, SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', AuthOngs, OngController.create);

routes.get('/profile', AuthProfile, ProfileController.index);

routes.get('/incidents',AuthPage, IncidentsController.index);
routes.post('/incidents',AuthCreateIncidents, IncidentsController.create);
routes.delete('/incidents/:id',AuthDeleteIncidents, IncidentsController.delete);




module.exports = routes;