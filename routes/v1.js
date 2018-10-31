'use strict';

import express from 'express'
import CityHandle from '../controller/v1/cities.js'

const router = express.Router();

router.get('/cities', CityHandle.getCity);
router.get('/peoples', CityHandle.getPeople);

module.exports = router