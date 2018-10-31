'use strict';

import v1 from './v1'


const app = app => {
	// app.get('/', (req, res, next) => {
	// 	res.redirect('/');
	// });
	app.use('/v1', v1);
}

module.exports = app;