const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/Usercontroller');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');

routes.get('/users', UserController.list);
routes.post('/users', UserController.store);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.get('/users/:user_id/address', AddressController.index);
routes.post('/users/:user_id/address', AddressController.store);

routes.post('/users/:user_id/techs', TechController.store);

// routes.post('/users/:user_id/address', AddressController.store)

module.exports = routes;