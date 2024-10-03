
// bing copilot

'use strict';

const ohQueueController = require.main.require('./src/controllers/ohQueue');

module.exports = (app, middleware) => {
	app.get('/oh-queue', middleware.buildHeader, ohQueueController.get);

	app.get('/api/oh-queue', ohQueueController.get);
};





