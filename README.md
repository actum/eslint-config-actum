# Introduction
`eslint-config-actum` is a set of rules for [gulp-eslint](https://github.com/adametry/gulp-eslint) plugin, which is heavily based on [AirBnB JavaScript Styleguide](airbnb javascript style guide).

# Usage
To use this configuration in your project, follow these steps:

## 1. Install the module via npm:
`npm install -D kettanaito/eslint-config-actum`

## 2. Configure ESLint in your **package.json**:
``` json
"eslintConfig": {
  "extends": "actum" 
}
```
# Using environment-specific rules
In order to use different rules depending on the environment, include the configuration module in your Gulp task and use it as follows:
``` js
const getConfig = require('eslint-config-actum').getConfig;

...

gulp.task('lint:js', () => {
  const rules = getConfig(isDev);

  return gulp.src(...)
    .pipe(eslint(rules))
    .pipe(eslint.format());
});
```