var express = require('express');
var router = express.Router();
const controller = require('../controllers/posts');
const jwt = require('express-jwt');
const upload = require('../utilities/uploads/Multer');

require('dotenv').config();


router 
      .post('/', upload.single('image'), jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.create)
      .get('/myrecipes/:id', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.myRecipes)   
      .get('/category/breakfast', controller.breakfast)  
      .get('/category/brunch', controller.brunch) 
      .get('/category/lunch', controller.lunch) 
      .get('/category/dinner', controller.dinner) 
      .get('/:id', controller.view) 
      .get('/recipe/:id',  jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.recipe)
      .patch('/', upload.single('image'), jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.update) 
      .delete('/:id', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.delete) 

module.exports = router;