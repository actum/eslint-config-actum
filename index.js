module.exports = {
	dev: require('./dev.js'),
	prod: require('./prod.js')
	
	// getConfig: (isDev) => {
	// 	const configPath = isDev ? './dev.js' : './prod.js';
	// 	const config = require(configPath);
	// 	return config;
	// }
};
