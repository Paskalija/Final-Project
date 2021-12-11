var express = require('express');
var router = express.Router();
const controller = require('../controllers/posts');


router.get('/',controller.homePage);

module.exports = router;