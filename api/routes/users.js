var express = require('express');
var router = express.Router();
const controller = require('../controllers/users');
const jwt = require('express-jwt');


router.post('/register', controller.register)   // raboti
      .post('/login', controller.login) // raboti
      .get('/profile', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.myProfile) // raboti
      .patch('/', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.update) // raboti
      .post('/logout',jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }),controller.logout) // raboti
      .get('/update',jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }),controller.getUpdate) // raboti
      .delete('/',jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }),controller.delete)  // raboti

module.exports = router;