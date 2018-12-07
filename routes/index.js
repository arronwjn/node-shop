'use strict';

const  v1 = require( './v1');
const  user = require( './user');


const app = app => {
	// app.get('/', (req, res, next) => {
	// 	res.redirect('/');
	// });
	app.use('/v1', v1);
	app.use('/user', user);
}

module.exports = app;