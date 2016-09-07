module.exports = function ActumESLint (isDev) {}

ActumESLint.prototype.getConfig(isDev) {
	const path = isDev ? './dev.js' : './prod.js';
	return path;
};
