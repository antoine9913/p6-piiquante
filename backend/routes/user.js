const express = require('express');
const router = express.Router();
const passwordValidator = require('../middleware/password');

const userCtrl = require('../controllers/userControllers');

router.post('/signup', passwordValidator , userCtrl.signup);
router.post('/login' , userCtrl.login);

module.exports = router;