module.exports = {
	getConfig: (isDev) => {
		const configPath = isDev ? 'dev.js' : 'prod.js';
		const config = require(configPath);
		return config;
	}
};
