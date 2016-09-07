module.exports = {
	getConfig: (isDev) => {
		const configFile = isDev ? 'dev.js' : 'prod.js';
		configPath = require('path').resolve(__dirname, configFile);
		return configPath;
	}
};
