module.exports = {
	/* Return different configuration file depending on the environment */
	getConfig: (options) => {
		/* Default options */
		options.isDev = options.isDev || true;

		/* Get configuration filepath relative to the module directory */
		const configFile = options.isDev ? 'dev.js' : 'prod.js';
		configPath = require('path').resolve(__dirname, configFile);

		return configPath;
	}
};
