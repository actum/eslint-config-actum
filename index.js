module.exports = {
	getConfig: (isDev) => {
		const configPath = isDev ? 'dev.js' : 'prod.js';
		configPath = __dirname + '/' + configPath;
		return configPath;
	}
};
