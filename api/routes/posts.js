var express = require('express');
var router = express.Router();
const controller = require('../controllers/posts');
const jwt = require('express-jwt');

require('dotenv').config();

router.post('/', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.create)    // raboti
      // .get('/homepage',controller.homePage)
      .get('/myrecipes/:id', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.myRecipes)   // raboti
      .get('/category/breakfast', controller.breakfast)  // raboti
      .get('/category/brunch', controller.brunch) // raboti
      .get('/category/lunch', controller.lunch) // raboti
      .get('/category/dinner', controller.dinner)  // raboti
      .get('/:id', controller.view) //raboti
      .patch('/:id', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.update) //raboti
      .delete('/:id', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.delete)  // raboti

module.exports = router;