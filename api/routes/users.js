var express = require('express');
var router = express.Router();
const controller = require('../controllers/users');
const jwt = require('express-jwt');
const upload = require('../utilities/uploads/Multer');



router.post('/register', controller.register)   
      .post('/login', controller.login) 
      .get('/profile', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.myProfile) 
      .patch('/update', upload.single('image'), jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.update) 
      .post('/logout',jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }),controller.logout) 
      .delete('/',jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }),controller.delete)  

module.exports = router;