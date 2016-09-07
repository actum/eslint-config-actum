module.exports = function ActumESLint (isDev) {}

ActumESLint.prototype.getConfig = function (isDev) {
	const configPath = isDev ? 'dev.js' : 'prod.js';
	return configPath;
};
