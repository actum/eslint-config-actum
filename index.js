module.exports = {
	getConfig: (isDev) => {
		const configPath = isDev ? 'dev.js' : 'prod.js';
		return configPath;
	}
};
