const express = require('express');


module.exports = {
	publicPath: '/',
	lintOnSave: false,
	css: {
		loaderOptions: {
			scss: {
				data: '@import "@/styles/imports.scss";'
			}
		}
	},
	devServer: {
		before: function (app, server) {
			app.use('/objects', express.static(`${__dirname}/dev/objects`));
			
			app.get('/services/userapi/currentUser', async (request, response, next) => {
				await new Promise(resolve => setTimeout(resolve, 200));
				response.json({
					name: 'D064904',
					firstName: 'Marc-Peter',
					lastName: 'Eisinger',
					email: 'marc-peter.eisinger@sap.com',
					displayName: 'Marc-Peter Eisinger (D064904)'
				})
			})
		},
		// proxy: {
		// '^/objects': {
		// 	target: 'https://pimgmt-s3.cfapps.eu10.hana.ondemand.com',
		// 	changeOrigin: true,
		// 	pathRewrite: {
		// 		'^/objects': '/api/v1/file'
		// 	},
		// 	auth: 'd064904:d7932c4c7607381649f68a04349adfdc8b98de17b3fcbee39b749aa18d278bd2',
		// }
		// }
	}
};
