'use strict';

const express = require( 'express');
const LoginHandle = require( '../controller/user/login.js')

const router = express.Router();

router.post('/login', LoginHandle.login);
router.post('/register', LoginHandle.register);

module.exports = router;