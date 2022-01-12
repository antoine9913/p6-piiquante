const express = require('express');
const router = express.Router();
const passwordValidator = require('../middleware/password');
const bouncer = require("express-bouncer")(30000, 60000, 3);

const userCtrl = require('../controllers/userControllers');

router.post('/signup', passwordValidator , userCtrl.signup);
router.post('/login', bouncer.block , userCtrl.login);

module.exports = router;