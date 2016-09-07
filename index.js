var ActumESLint = function () {};

ActumESLint.prototype.getConfig = function (isDev) {
	const configPath = isDev ? 'dev.js' : 'prod.js';
	return configPath;
};

module.exports = ActumESLint;
