// Require de Express
let express = require('express');

// Require de Router
let router = express.Router();

// Require de controllers
const mainController = require('../controllers/mainController');

router.get('/',mainController.textoBienvenida);

module.exports = router;
