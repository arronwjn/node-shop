'use strict';

const express = require( 'express');
const CityHandle = require( '../controller/v1/cities.js')

const router = express.Router();

router.get('/cities', CityHandle.getCity);
router.get('/peoples', CityHandle.getPeople);

module.exports = router;