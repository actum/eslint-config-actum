module.exports = function ActumESLint (isDev) {
	const path = isDev ? './dev.js' : './prod.js';
	return path;
}
