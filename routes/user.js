'use strict';

const express = require( 'express');
const LoginHandle = require( '../controller/user/login.js')

const router = express.Router();

router.post('/login', LoginHandle.login);

module.exports = router;