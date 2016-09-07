module.exports = {
	/* Return different configuration file depending on the environment */
	getConfig: (options = { isDev: true }) => {
		const configFile = options.isDev ? 'dev.js' : 'prod.js';
		configPath = require('path').resolve(__dirname, configFile);

		return configPath;
	}
};
