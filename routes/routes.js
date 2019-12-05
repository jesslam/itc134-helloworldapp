const express = require('express');
const router = express.Router();

//Require controllers
const controller = require('../controllers/controller.js');

//File communication test
router.get('/test', controller.test);


module.exports = router;